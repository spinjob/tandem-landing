import { useEffect, useRef, useState } from 'react';
import { Text, Group, Card,Button, Image, createStyles, ActionIcon} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import {CiImport} from 'react-icons/ci'
import {VscBracketError} from 'react-icons/vsc'
import {MdCancel} from 'react-icons/md'
import {TbFileCode} from 'react-icons/tb'
import uploadArrow from '../../public/icons/upload-arrow.svg'
import codeCheckmarkIcon from '../../public/icons/file-code-checkmark-right-down.svg'
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

type Props = {
  fileJson: any;
  isUploading: boolean;
  setFileJson: (file: any) => void;
  uploadJob: any;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative'
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));


const ImportApiDropzone: React.FC<Props> = ({uploadJob, fileJson, setFileJson,isUploading}) => {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  
  useEffect(() => {
    if (uploadJob && uploadJob.status == 'PENDING' && !isLoading) {
        setIsLoading(true)
    } else if (uploadJob && uploadJob.status == 'COMPLETE' && !isUploading) {
        console.log("COMPLETED JOB")
        console.log(uploadJob)
        setIsLoading(false)
        setResult(uploadJob)
    }

    }, [uploadJob,isLoading])

  return (
    <div className={classes.wrapper}>
      {
        fileJson && !uploadJob ? (
            <div style={{borderRadius:'20px', alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'row',backgroundColor:'white', width: '100%', height: '200px'}}>
                <Card radius='lg' sx={{alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                     <Card.Section sx={{display: 'flex', width: '100%', alignItems: 'flex-end', justifyContent:'flex-end'}}>
                            <ActionIcon sx={{paddingTop: 20}}>
                                <MdCancel onClick={()=>{
                                    setFileJson(null)
                                    setFilePath(null)
                                    setIsLoading(false)
                                }} size={50} color={'black'} style={{
                                    cursor: 'pointer'
                                }}/>
                            </ActionIcon>
                    </Card.Section>
                    <Card.Section sx={{marginTop: -20, display: 'flex',flexDirection: 'row', width:'100%', height: '100%', alignItems:'center', justifyContent:'center'}}>
                        <div>
                            <Image
                                src={codeCheckmarkIcon}
                                alt="Upload Arrow"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div style={{width: '20px'}}/>
                       <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'flex-start'}}>
                            <Text sx={{fontFamily: 'Visuelt', fontSize: '18px'}}>
                                File: {filePath}
                            </Text>
                            {
                                fileJson?.info?.title ? 
                                    <Text sx={{fontFamily: 'Visuelt', fontSize: '18px'}}> Name: {fileJson?.info?.title} </Text> : null
                            }
                        
                            <Text sx={{fontFamily: 'Visuelt', fontSize: '18px'}}>
                            { fileJson?.openapi ? "Standard: Open API " + fileJson?.openapi : fileJson?.swagger ? "Standard: Swagger " + fileJson?.swagger : 'No OpenAPI Spec'} 
                            </Text>

                        </div>    
                           
                    </Card.Section>
                </Card>
               
            </div>
        ) : fileJson && uploadJob && uploadJob.status == "COMPLETE" ? (
            <div style={{borderRadius:'20px', alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'row',backgroundColor:'white', width: '100%', height: '200px'}}>
                <Card radius='lg' sx={{alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                    <Card.Section sx={{ display: 'flex',flexDirection: 'row', width:'100%', height: '100%', alignItems:'center', justifyContent:'flex-start'}}>
    
                       <div style={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start', padding: 20}}>
                            <Text sx={{fontFamily: 'Visuelt', fontSize: '24px', fontWeight: 600}}>
                                We have successfully validated your API
                            </Text>
                            <Text sx={{fontFamily: 'Visuelt', fontSize: '18px', fontWeight: 100, color: '#3D3D3D'}}>
                                You are good to start using Tandem!
                            </Text>
                            <div style={{height: '20px'}}/>
                            <Button radius="lg"  sx={{ width: '300px', height: '50px', fontFamily: 'visuelt-regular',fontSize: '18px',fontWeight: 600,backgroundColor: 'black',borderRadius: 10,color: 'white',
                                '&:hover': {
                                        backgroundColor: '#3E3E3E',
                                        color: 'white',
                                    }}}>
                                Start Using Tandem
                           </Button>

                        </div>    
                           
                    </Card.Section>
                </Card>
               
            </div>
        ) : (
            <>
              <Dropzone
                loading={isUploading}
                openRef={openRef}
                onDrop={(acceptedFiles) => {
                acceptedFiles.forEach((file) => {
                    setFilePath(file.name)
                    
                    const reader = new FileReader();
                    reader.onload = () => {
                    const binaryStr = reader.result;
                    var json = JSON.parse(binaryStr as string)
                    setFileJson(json)
                    };
                    reader.readAsText(file);
                })
                }}
                className={classes.dropzone}
                radius="md"
                accept={['application/json']}
                style={{backgroundColor: 'white', border: '0px'}}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Text align="center" style={{fontFamily: 'Visuelt', color:'#5A5A5A'}} size="lg" mt="xl">
                        <Dropzone.Accept>
                        <CiImport size={50} color={'#b4f481'}/>
                        <Text>Drop to Import</Text>
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                        <VscBracketError size={50} color={'#ff7e35'}/>
                        <Text>File must be in JSON</Text>
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <div style={{width: 50, height: 50}}>
                                    <Image  src={uploadArrow} />
                                </div>
                                <Text style={{fontFamily: 'apercu-regular-pro', color: 'black', fontSize: '18px', paddingTop: 10}} >Click to upload or drag & drop</Text>
                            </div>
                        </Dropzone.Idle>
                    </Text>
                </div>
            </Dropzone>
            <Button className={classes.control} sx={{
                fontFamily: 'Visuelt', 
                fontWeight: 100, 
                backgroundColor: 'black', 
                color: 'white',
                '&:hover': {
                backgroundColor: '#3E3E3E',
                }
            }} size="md" radius="xl" onClick={() => openRef.current?.()}>
                Select files
            </Button>
            </>
          
        )
      } 

    
    </div>
  );
}

export default ImportApiDropzone;
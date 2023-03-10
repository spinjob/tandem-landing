
import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Text,
    Image,
    Anchor,
    Burger,
    Drawer,
    Divider,
    ScrollArea,
    UnstyledButton,
    NavLink
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import primaryLockupBlack from '../../public/logos/SVG/Primary Lockup_Black.svg'

const Footer = () => {

    return (
            <div style={{height: '900px', width: '100%', backgroundColor: '#9596FF', display:'flex', flexDirection:'column'}}>
                <div style={{height: '85%', width: '100%',  padding: 100}}>
                    <div style={{width: '100%',display:'flex', justifyContent:'space-between', paddingBottom: 20}}>
                        <Text sx={{fontFamily:'vulf-sans-bold'}}>
                            Supported Open API versions:
                        </Text>
                        <Anchor underline color={'dark'} sx={{fontFamily:'visuelt-regular'}}>
                            How do I get an API Spec?
                        </Anchor>
                    </div>
                  
                    <div style={{backgroundColor:'#B5B6FF', height: '200px', borderRadius: 20}}>
                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent: 'center',height: '420px',width: '100%'}}>
                        <Text sx={{width: '50%', fontFamily:'vulf-sans-bold', fontSize: '94px'}}>
                            Check Your API Spec
                        </Text>
                    </div>
                       
                </div>
                <div style={{height: '15%', width: '100%', backgroundColor:'#B5B6FF', display:'flex', flexDirection:'row', justifyContent:'space-between', borderTopRightRadius: 90, borderTopLeftRadius: 90}}>
                    <Group sx={{paddingLeft: 70}}>
                        <Image src={primaryLockupBlack} alt="Primary Lockup Black" width={150}/>
                    </Group>
                    <Group>
                        <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px', paddingRight: 70}}>
                            © 2021 Tandem Inc. All Rights Reserved.
                        </Text>
                        </Group>
                </div>
            </div>
     )
}

export default Footer
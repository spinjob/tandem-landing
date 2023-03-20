import { Text, Button, Card, Badge, Checkbox, SimpleGrid, Anchor, Group, Image, TextInput, createStyles} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import ImportApiDropzone from '../components/import-api'
import Head from 'next/head'
import HeaderAction from '../components/header'
import axios from 'axios'
import Footer from '../components/footer'
import purpleSlider from '../../public/landing-page-purple-slider.svg'
import {useState, useEffect, useCallback} from 'react'
import {Player } from '@lottiefiles/react-lottie-player';
import heroLeftAnimation from '../../public/animations/Hero_Left.json'
import heroRightAnimation from '../../public/animations/Hero_Right.json'
import sliderAnimation from '../../public/animations/MoveFast_Slider.json'
import howItWorksLineAnimationA from '../../public/animations/HowItWorks_Lines_A.json'
import howItWorksLineAnimationB from '../../public/animations/HowItWorks_Lines_B.json'
import howItWorksLineAnimationC from '../../public/animations/HowItWorks_Lines_C.json'
import howItWorksLineAnimationD from '../../public/animations/HowItWorks_Lines_D.json'
import howItWorksLineAnimationE from '../../public/animations/HowItWorks_Lines_E.json'
import levelUpAnimationA from '../../public/animations/LevelUp_Icons_A_Circles.json'
import levelUpAnimationB from '../../public/animations/LevelUp_Icons_B_GearSwitch.json'
import levelUpAnimationC from '../../public/animations/LevelUp_Icons_C_Accordion.json'
import levelUpAnimationD from '../../public/animations/LevelUp_Icons_D_Arrow.json'

import mobileSectionVector from '../../public/Mobile-Section-1-Drawing.svg'

import SchemaAnimation from '../../public/animations/ValueProp_Section1.json'
import WorkflowAnimation from '../../public/animations/ValueProp_Section2.json'
import FormulaAnimation from '../../public/animations/ValueProp_Section3.json'

import downArrowIcon from '../../public/icons/arrow.svg'
import verticalDots from '../../public/icons/dots.svg'
import {AiOutlineCheckCircle} from 'react-icons/ai'


import primaryLockupBlack from '../../public/logos/SVG/Primary Lockup_Black.svg'
import {v4 as uuidv4} from 'uuid';

const useStyles = createStyles((theme) => ({
	button: {
	  display: 'flex',
	  width: '100%',
	  border: '1px solid black',
	  borderRadius: theme.radius.sm,
	  padding: theme.spacing.lg,
	  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  
	  '&:hover': {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
	  },
	},
	activeHowItWorks: {
		backgroundColor: '#D9FAC0',
		border: '1px solid #000000',
		cursor: 'pointer'
	},
	howItWorks: {
		backgroundColor: '#FFFFFF',
		color:'#858585',
		'&:hover': {
			backgroundColor: '#D9FAC0',
			border: '1px solid #000000'
		},
		cursor: 'pointer'
	},
	hiddenMobileSmall:{
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
		display:'flex'
	},
	hiddenMobileMedium:{
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
		display:'flex'
	},
	hiddenDesktop:{
		[theme.fn.largerThan('md')]: {
			display: 'none',
		},
		display:'flex'
	},
  }));



export default function Home() {

	const [selectedHowItWorks, setSelectedHowItWorks] = useState('a')
	const { classes, cx, theme } = useStyles();
	const [uploadJob, setUploadJob] = useState<any>(null)
	const [canValidate, setCanValidate] = useState(false)
	const [fileJson, setFileJson] = useState(null)
	const [isUploading, setIsUploading] = useState(false)
	const [uploadProgress, setUploadProgress] = useState(0)
	const router = useRouter()

	const form = useForm({
		initialValues: {
			email: ''
		},
		validateInputOnChange: true,
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
		}
	});

	const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

	useEffect(() => {
		if(form.isValid('email') == true && fileJson) {
			setCanValidate(true)
		} else {
			setCanValidate(false)
		}
		}, [form.isValid('email'), fileJson]
	)

	const howItWorksData = [
		{
			'id': 'a',
			'label': 'Powered by your documentation',
			'content': 'Upload existing API documentation, and turn it into a workspace for your Partnership and Integrations teams to build out and validate workflows between you and your partner APIs',
			'link': '/docs'
		},
		{	
			'id': 'b',
			'label': 'Easy data translation and mapping',
			'content': 'Using the schema definitions in you and your partner API specifications, Tandem simplifies the mapping, translation, and configuration of field-level data between APIs.',
			'link': '/docs'
		},
		{
			'id': 'c',
			'label': 'Manage team permissions',
			'content': 'Decide which team members can manage or read your documentation, workflows, settings and data.',
			'link': '/docs'
		},
		{
			'id': 'd',
			'label': 'Completely customizable',
			'content': 'Set and manage partnership- and customer-specific configurations for your workflows to use during Schema Mapping or API request execution.',
			'link': '/docs'
		},
		{
			'id': 'e',
			'label': 'Generate awesome documentation',
			'content': 'Quickly generate integration requirement documentation and standard operating procedures in a clean, intuitive format.',
			'link': '/docs'
		}
	]

	const levelUpData = [
		{
			'id': 'a',
			'label': 'Unlock partnership revenue',
			'content': "Tandem lowers the upfront cost of partner integration, enabling long-tail opportunities that historically didn't add up.",
			'link': '/docs',
			'animation': levelUpAnimationA,
			'color': '#D9FAC0'
		},
		{
			'id': 'b',
			'label': 'Integrate at the speed of partnership',
			'content': 'Spend less time waiting for engineering team bandwidth. Tandem hands the reins of partner integration timelines directly to the teams responsible for their delivery.',
			'animation': levelUpAnimationB,
			'color': '#FFBD9A'
		},
		{
			'id': 'c',
			'label': 'No more launch day surprises',
			'content': 'Tandem adheres to your API specifications, so the workflows you build are validated against each APIs rules and data requirements. Goodbye, post-launch thrash.',
			'animation': levelUpAnimationC,
			'color': '#FFD1CD'
		},
		{
			'id': 'd',
			'label': 'Stop weighing partnership against product',
			'content': "We built Tandem to empower integrations teams to execute and launch. That means fewer tradeoffs when you're weighing lucrative partnerships against other product priorities.",
			'animation': levelUpAnimationD,
			'color': '#B5B6FF'
		},
	]

	const updateJob = (uuid : string) => {
        axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + '/jobs/' + uuid, {status: "COMPLETE"}).then((res) => {
            var job = {...res.data, status: "COMPLETE"}
			setUploadJob(job)
			if(isUploading){
				setIsUploading(false)
			}
			console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

	const updateProgress = (job: any) => {
		var schemaProgress = job.metadata.schema.status == 'COMPLETED' ? 100 : 0
		var actionStatus = job.metadata.actions.status == 'COMPLETED' ? 100 : 0
		var parameterStatus = job.metadata.parameters.status == 'COMPLETED' ? 100 : 0
		var securitySchemeStatus = job.metadata.securitySchemes.status == 'COMPLETED' ? 100 : 0
		var webhookStatus = job.metadata.webhooks.status == 'COMPLETED' ? 100 : 0

		var totalProgress = (schemaProgress + actionStatus + parameterStatus + securitySchemeStatus + webhookStatus) / 5

		if(totalProgress == 100){
			console.log("Job Complete")
			setUploadProgress(100)
			setIsUploading(false)
			updateJob(job.uuid)
		} else {
			console.log("Job In Progress")
			setUploadProgress(totalProgress)
			delay(1000).then(() => {
				fetchJob(job.uuid)
			})
		}
	}

	const fetchJob = useCallback((uuid: string) => {
        axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/jobs/' + uuid).then((res) => {
            updateProgress(res.data)
            setUploadJob(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [updateProgress])

	async function processJsonFile (file: any, email: string) {
		var temporaryUserId = "temp-"+email+"-"+uuidv4()
		var temporaryOrganizationId = "temp-organization-"+uuidv4()
		var updatedFile = {
			"spec": file,
			"userId": temporaryUserId,
			"organizationId": temporaryOrganizationId
		}
	   return new Promise((resolve, reject) => {
		 axios.post(process.env.NEXT_PUBLIC_API_BASE_URL+'/interfaces/upload', updatedFile).then((res) => {
		   if(res.status === 200) {
			 delay(1000).then(() => {
				fetchJob(res.data.uuid)
			 })
			 setIsUploading(true)
			 resolve(res.data)
		   }
		 }).catch((err) => {
		   console.log(err)
		   reject({status: 'Error',message: err})
		 })
	   });
	 }

  return (
    <div style={{width: '100vw', height: '100vh', maxWidth: '100%'}}>
      <Head>
        <title>Tandem</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderAction/>
	  <div style={{ marginTop: 80, height: '700px', width: '100vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',boxSizing: 'border-box',position: 'relative'}}>
		<div className={cx(classes.hiddenMobileMedium)} style={{ flexDirection: 'row', width:'30%',height: '100%',alignItems:'flex-start'}} >
			<Player autoplay loop src={heroLeftAnimation} style={{position:'absolute', height: '800px', width: '800px', marginLeft: -280}}/>
		</div>
		<div className={cx(classes.hiddenMobileSmall)} style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%',width:'40%'}}>
			<div style={{display: 'flex', flexDirection: 'row',backgroundColor: '#D9FAC0', width: '500px', height: '110px', borderRadius: 10,alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
				<Text sx={{marginTop: -20,fontSize: '96px',fontFamily: 'vulf-sans-bold'}}>
					Integrate
				</Text>
			</div>
			<Text sx={{fontSize: '96px',fontFamily: 'vulf-sans-bold',lineHeight: '129px',textAlign: 'center'}}>
				in tandem
			</Text>
			<div style={{ height: '20px'}} />
			<Text sx={{fontSize: '22px',fontWeight: 100,lineHeight: '32px',width: '610px',textAlign: 'center',fontFamily: 'visuelt-regular',color: '#3E3E3E'}}>
				Turn your partnership API documentation into a simple, powerful, no-code workspace.
			</Text>
			<div style={{height: '40px'}}/>
			<Button radius="lg"  sx={{ width: '221px', height: '76px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'black',color: 'white',
					'&:hover': {
						backgroundColor: '#3E3E3E',
						color: 'white',
					}}}>
				Get Started
			</Button>
		</div>

		{/* Mobile Hero Section */}
		<div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'center', marginTop: -150}}>
			<div style={{display: 'flex', flexDirection: 'row',backgroundColor: '#D9FAC0', borderRadius: 10,alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
				<Text sx={{marginTop: -20,fontSize: '66px',fontFamily: 'vulf-sans-bold'}}>
					Integrate
				</Text>
			</div>
			<Text sx={{fontSize: '66px',fontFamily: 'vulf-sans-bold',lineHeight: '80px',textAlign: 'center'}}>
				in tandem
			</Text>
			<div style={{ height: '20px'}} />
			<Text sx={{ fontSize: '20px', fontWeight: 100, lineHeight: '32px', textAlign: 'center', fontFamily: 'visuelt-regular', color: '#3E3E3E'}} >
				Turn your partnership API documentation into a simple, powerful, no-code workspace.
			</Text>
			<div style={{ height: '40px' }} />
			<Button radius="lg"  sx={{ width: '90%',  height: '60px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'black',borderRadius: 10,color: 'white',
				'&:hover': {
						backgroundColor: '#3E3E3E',
						color: 'white',
					}}}>
				Get Started
			</Button>
			<div style={{ height: '10px' }} />
			<Button radius="lg" sx={{ width: '90%',  height: '60px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'white',borderRadius: 10,color: 'black',border: '2px solid black',
				'&:hover': {backgroundColor: '#3E3E3E',color: 'white'}}}>
				Pricing
			</Button>
		</div>
		<div className={cx(classes.hiddenMobileMedium)} style={{ flexDirection: 'row', width:'30%', height: '100%', alignItems:'flex-start', boxSizing: 'border-box',overflow: 'hidden'}}>
			<Player autoplay loop src={heroRightAnimation} style={{position:'absolute', height: '800px', width: '800px'}}/>
		</div>
	  </div>
		<div  className={cx(classes.hiddenDesktop)} style={{ width: '100%', marginTop: -100, paddingBottom: 100}} >
			<Image alt="mobileBanner" src={mobileSectionVector} />
		<div style={{height: '40px'}} />
	  </div>

	  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '476px',position: 'relative' }}>
		<div className={cx(classes.hiddenMobileSmall)} style={{height: '69px', width: '256px'}} >
			<Player autoplay keepLastFrame loop={false} src={sliderAnimation} />
		</div>
		<div style={{height: '40px'}} />
		<div className={cx(classes.hiddenMobileSmall)} style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
			<Text sx={{ fontSize: '62px', fontFamily:'vulf-sans-bold', lineHeight: '64px', width: '80%', textAlign: 'center',paddingBottom: 50}} >
				Move fast and launch things
			</Text>
			<Text sx={{ fontSize: '22px', fontWeight: 400, width: '80%', maxWidth: '800px', fontFamily: 'visuelt-regular', textAlign: 'center',paddingBottom: 30}}>
				Tandem unblocks teams working on software partnerships between organizations.  PMs, engineers, and account managers can scope and launch integrations with speed, clarity, and efficiency.
			</Text>
		</div>
		<div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
			<Text sx={{ fontSize: '45px',fontFamily:'vulf-sans-bold',lineHeight: '64px',width: '80%',textAlign: 'center',paddingBottom: 20,}}>
				Move fast and launch things
			</Text>
			<Text sx={{ fontSize: '18px',fontWeight: 400,width: '80%',maxWidth: '800px',fontFamily: 'visuelt-regular',textAlign: 'center',paddingBottom: 30}}>
				Tandem unblocks teams working on software partnerships between organizations.  PMs, engineers, and account managers can scope and launch integrations with speed, clarity, and efficiency.
			</Text>
		</div>
		<div className={cx(classes.hiddenDesktop)} style={{height: '69px', width: '256px'}} >
				<Player autoplay keepLastFrame loop={false} src={sliderAnimation} />
		</div>
	  </div>
		<div className={cx(classes.hiddenMobileMedium)} style={{ padding: 100, height: '721px', flexDirection: 'column', width: '100vw'}}>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingTop: 60, position: 'relative' }}>
				<div style={{ display: 'flex', flexDirection: 'column', width: '580px', height: '100%' }}>
					<Text sx={{ fontSize: '76px', fontWeight: 700, lineHeight: '64px', textAlign: 'left', fontFamily: 'vulf-sans-bold'}}>
						How it works
						<div style={{height: '40px'}} />
					</Text>
					{
						howItWorksData.map((item, index) => {
							return (
								<div key={item.id+item.label} style={{display:'flex', paddingBottom: 20}}>
									<div className={ selectedHowItWorks === item.id ? cx(classes.activeHowItWorks) : cx(classes.howItWorks) } onClick={() => { setSelectedHowItWorks(item.id) }} style={{ display: 'flex', flexDirection: 'row', width: '1000px', paddingLeft: 10, borderRadius: 10 }} >
										<Text sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '64px', textAlign: 'left', fontFamily: 'vulf-sans-bold' }} >
											{item.label}
										</Text>
									</div>
									</div> 
							)})
					}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '170px', height: '200px', marginLeft:-20, marginRight: -70 }}>
					{
						  selectedHowItWorks === "a" ? ( <Player autoplay keepLastFrame loop={false} src={howItWorksLineAnimationA} style={{ marginBottom:-50 }} />) 
						: selectedHowItWorks === "b" ? ( <Player autoplay keepLastFrame loop={false} src={howItWorksLineAnimationB} style={{ marginBottom:-75 }} />)
						: selectedHowItWorks === "c" ? ( <Player autoplay keepLastFrame loop={false} src={howItWorksLineAnimationC} style={{ marginBottom:-100 }} />) 
						: selectedHowItWorks === "d" ? ( <Player autoplay keepLastFrame loop={false} src={howItWorksLineAnimationD} style={{ marginBottom:-140 }} />) 
						: selectedHowItWorks === "e" ? ( <Player autoplay keepLastFrame loop={false} src={howItWorksLineAnimationE} style={{ marginBottom:-170 }} />) 
						: (null)
					}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '500px', height: '100%', paddingTop: 90}}>
					<Card radius={'lg'} sx={{ border: '1px solid #000000', height: '260px', alignItems: 'center'}}>
						<Card.Section sx={{ backgroundColor:'#D9FAC0', width: '400px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<div style={{width: '90%'}} />
							<div style={{width: '10%', display: 'flex', flexDirection:'row'}} >
								<Image alt="down arrow" src={downArrowIcon} />
								<Image alt="vertical dots" src={verticalDots} />
							</div>
						</Card.Section>
						<Card.Section sx={{ width: '400px', padding: 20}}>
							<Text sx={{ fontSize: '16px',  fontFamily: 'apercu-regular-pro', textAlign:'left', justifyContent: 'left', lineHeight: '24px',fontWeight: 400, color: '#000000'}}>
								{
									howItWorksData.filter((item) => {
										return item.id === selectedHowItWorks
									})[0].content
								}
							</Text>
						</Card.Section>
					</Card>
				</div>
			</div>
		</div>

		{/* Mobile How it Works Carousel */}
		<div className={cx(classes.hiddenDesktop)} style={{ paddingTop: 150, flexDirection: 'column', width: '100%'}}>
			<Text sx={{ fontSize: '45px', fontWeight: 700, lineHeight: '64px', textAlign: 'left', fontFamily: 'vulf-sans-bold',paddingLeft: 20}}>
				How it works
			</Text>
			<div style={{height: '40px'}} />
			<Carousel withControls={false} slideSize="85%" slideGap={10}  align='center'
				onSlideChange={(index) => {
					setSelectedHowItWorks(howItWorksData[index].id)
				}}
			>
				{
					howItWorksData.map((item) => {
						return(
							<Carousel.Slide key={item.id}>
								<div style={{display:'flex',flexDirection: 'row'}}>
									<div style={{width: 5}}/>
									<div style={{ display: 'flex', flexDirection: 'row', backgroundColor: selectedHowItWorks === item.id ? '#D9FAC0' : '#F2FFE4', border: '1px solid #000000',height: 100,paddingLeft: 10,paddingRight: 10,alignItems: 'center',borderRadius: 10,width: '100%'}}>
										<Text sx={{ fontSize: '22px', fontFamily: 'vulf-sans-bold', fontColor: selectedHowItWorks === item.id ? '#000000' : '#3E3E3E'}} >
											{item.label}
										</Text>
									</div>
								</div>
							</Carousel.Slide>
						)
					})
				}
			</Carousel>
			<div style={{ display: 'flex', padding: 20, alignItems: 'center', justifyContent: 'center'}}>
				<Card radius={'lg'} sx={{ border: '1px solid #000000'}}>
					<Card.Section sx={{
						backgroundColor:'#D9FAC0',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '40px',
					}}>
						<div
							style={{width: '90%'}}
						>
						</div>
						<div
						style={{width: '10%', display: 'flex', flexDirection:'row'}}
						>
						<Image 
							alt="down arrow"
							src={downArrowIcon}
							/>
						
						<Image 
							alt="vertical dots"
							src={verticalDots}
							/>
							</div>
					</Card.Section>
					<Card.Section
						sx={{
							padding: 20
						}}
					>	
							<Text
								sx={{
									fontSize: '16px', 
									fontFamily: 'apercu-regular-pro',
									textAlign:'left',
									justifyContent: 'left',
									lineHeight: '24px',
									fontWeight: 400,
									color: '#000000'
								}}
							>{
								howItWorksData.filter((item) => {
									return item.id === selectedHowItWorks
								})[0].content
							}</Text>
					</Card.Section>
				</Card>
			</div>
		</div>

		<div className={cx(classes.hiddenMobileMedium)} style={{height: '1190px',width: '100vw',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>	
			<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '66px', width: '800px', textAlign: 'center'}}>
				Level up your integrations program
			</Text>
			<div>
				<div style={{height: '46px'}} />
				<SimpleGrid cols={2} spacing={46} >
				{
					levelUpData.map((item) => {
						return (
							<div key={item.id} style={{ width: '585px', height: '350px', borderRadius: 10, border: '1px solid #000000', backgroundColor: item.color}}>
								<div style={{ width: '100%', alignItems:'flex-end', justifyContent: 'flex-end', display: 'flex', flexDirection: 'row'}}>
									<Player autoplay loop src={item.animation} style={{ width: '150px', height: '100%'}}/>
								</div>
								<div style={{ width: '100%', paddingLeft: 30, paddingRight: '140px', alignItems:'flex-start', display: 'flex', flexDirection: 'column', marginTop: -10}}>
									<Text sx={{ fontFamily:'vulf-sans-bold', fontSize: '28px', lineHeight: '30px'}}>
										{item.label}
									</Text>
									<div style={{height: '20px'}} />
									<Text sx={{ fontFamily:'visuelt-regular', fontSize: '16px'}}>
										{item.content}
									</Text>
								</div>
							</div>
						)
					})
				}
				</SimpleGrid>
			</div>

		</div>

	  {/* Mobile Level Up Carousel */}
		<div className={cx(classes.hiddenDesktop)} style={{ paddingTop: 100, flexDirection: 'column', width: '100%'}}>
			<Text sx={{ fontSize: '45px', fontWeight: 700, lineHeight: '64px', textAlign: 'left', fontFamily: 'vulf-sans-bold',paddingLeft: 20}}>
				Level up your integrations program
			</Text>
			<div style={{height: '46px'}} />
			<Carousel withIndicators withControls={false} slideSize="90%" slideGap={10}  align='center'>
				{
					levelUpData.map((item) => {
						return (
							<Carousel.Slide key={item.id}>
								<div style={{display:'flex', flexDirection: 'row'}}>
									<div style={{ display: 'block', backgroundColor: item.color, border: '1px solid #000000',paddingLeft: 10,paddingRight: 10,paddingBottom: 20,borderRadius: 10,height: '380px'}}>
										<div style={{display:'flex', flexDirection:'row'}}>
											<Player autoplay loop src={item.animation} style={{width: '150px',height: '100%'}}/>
											<div style={{width: '50%'}} />
										</div>
										<Text sx={{ fontFamily:'vulf-sans-bold', fontSize: '26px', paddingRight: 20, paddingLeft: 20, lineHeight: '30px'}}>
											{item.label}
										</Text>
										<Text sx={{ fontFamily:'visuelt-regular', fontSize: '14px', paddingTop: 10, paddingRight: 20, paddingLeft: 20}} >
											{item.content}
										</Text>
									</div>
								</div>
							</Carousel.Slide>
						)
					})
				}
			</Carousel>
		</div>

		<div className={cx(classes.hiddenMobileMedium)} style={{  height: '685px',flexDirection: 'row',alignItems: 'center'}}>
			<div style={{ width:'50%'}}>
				<Player autoplay loop src={SchemaAnimation} />
			</div>
			<div style={{ alignItems:'center'}} >
				<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', width: '600px', alignItems: 'center',lineHeight: '60px'}}>
					Built on industry API
				</Text>
				<div style={{ backgroundColor:'#FFBD9A', width:'600px', height: '75px',borderRadius: 10}}>
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', width: '600px',textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
						specification standards
					</Text>
				</div>
				<div style={{height: '60px'}} />
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '18px', width: '650px', textAlign: 'left', alignItems: 'center',lineHeight: '32px'}} >
					Tandem currently supports API specification imports of Open API (v2 & v3) and Postman collections. Because we provide a lot of functionality after import, we have requirements of the data we ingest before it can be used. Check if your API is compatible here.
				</Text>
			</div>
		</div>

		{/* Mobile Value Prop A */}
		<div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column',alignItems: 'center'}}>
			<Player autoplay loop src={SchemaAnimation} />
			<div style={{ alignItems:'center', paddingLeft: 40, paddingRight: 40}} >
				<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px', alignItems: 'center',lineHeight: '60px'}}>
					Built on industry 
				</Text>
				<div style={{ backgroundColor:'#FFBD9A', borderRadius: 10}}>
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px',textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
						API specification standards
					</Text>
				</div>
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '14px',  textAlign: 'left', alignItems: 'center',lineHeight: '32px'}} >
					Tandem currently supports API specification imports of Open API (v2 & v3) and Postman collections. Because we provide a lot of functionality after import, we have requirements of the data we ingest before it can be used. Check if your API is compatibility here.
				</Text>
			</div>
		</div>


		<div className={cx(classes.hiddenMobileMedium)} style={{height: '685px', flexDirection: 'row', alignItems: 'center'}}>
			<div style={{width: '50%', paddingLeft: 100}}>
				<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', textAlign: 'left', alignItems: 'center', lineHeight: '60px', }}>
					Integrate what you 
				</Text>
				<div style={{display: 'flex',flexDirection:'row'}} >
					<div>
						<Text style={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', textAlign: 'left', alignItems: 'center', lineHeight: '60px' }} >
							want, 
						</Text>
					</div>
					<div style={{ backgroundColor:'#EAEAFF', width:'400px', height: '75px', borderRadius: 10,}}>
						<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', width: '800px', textAlign: 'left', alignItems: 'center', lineHeight: '60px'}} >
							when you want
						</Text>
					</div>
				</div>
				<div style={{height: '60px'}} />
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '18px', textAlign: 'left',alignItems: 'center',lineHeight: '32px', maxWidth: '600px'}}>
					No need to wait for us to build support for integration-specific business logic. Tandem uses your API documentation to populate your workflow triggers and actions. So if your APIs support it, we can use it.			
				</Text>
			</div>
			<div style={{width:'50%', maxWidth: '800px', overflow:'hidden' }}>
				<Player autoplay loop src={WorkflowAnimation} />
			</div>
		</div>

		{/* Mobile Value Prop B */}
		<div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column', alignItems: 'center'}}>
				<Player autoplay loop src={WorkflowAnimation} />
				<div style={{ alignItems:'center', paddingLeft: 40, paddingRight: 40}} >
				<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px', alignItems: 'center',lineHeight: '60px'}}>
					Integrate what  
				</Text>
				<div style={{ backgroundColor:'#EAEAFF', borderRadius: 10}}>
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px',textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
						you want, when you want
					</Text>
				</div>
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '14px',  textAlign: 'left', alignItems: 'center',lineHeight: '32px'}} >
						No need to wait for us to build support for integration-specific business logic. Tandem uses your API documentation to populate your workflow triggers and actions. So if your APIs support it, we can use it.			
				</Text>
			</div>
		</div>

		<div className={cx(classes.hiddenMobileMedium)} style={{ height: '685px',flexDirection: 'row',alignItems: 'center'}}>
			<div style={{ width:'50%'}}>
				<Player autoplay loop src={FormulaAnimation} />
			</div>
			<div style={{ alignItems:'flex-start', display:'flex', flexDirection:'column',alignContent:'left'}} >
				<div style={{alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'center'}}>
					<div style={{ backgroundColor:'#D9FAC0',borderRadius: 10}}>
						<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
							Scale
						</Text>
					</div>
					<div style={{width: '10px'}} />
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', width: '600px', alignItems: 'center',lineHeight: '60px'}}>
						while managing
					</Text>
				</div>
				<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '50px', width: '600px', alignItems: 'center',lineHeight: '60px'}}>
					the details
				</Text>
				<div style={{height: '60px'}} />
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '18px', width: '650px', textAlign: 'left', alignItems: 'center',lineHeight: '32px'}} >
					Tandem supports both partnership- and customer-specific configurations and settings, so you can manipulate or set values in your workflows at the level that you need to.
				</Text>
			</div>
		</div>

		{/* Mobile Value Prop C */}

		<div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column',alignItems: 'center', paddingBottom: 100}}>
			<Player autoplay loop src={FormulaAnimation} />
			<div style={{ alignItems:'center', paddingLeft: 40, paddingRight: 40}} >
				<div style={{ backgroundColor:'#D9FAC0',borderRadius: 10}}>
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px', textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
						Scale while
					</Text>
				</div>
					<Text sx={{ fontFamily: 'vulf-sans-bold', fontSize: '36px',textAlign: 'left',alignItems: 'center',lineHeight: '60px'}}>
						managing the details
					</Text>
				<Text sx={{ fontFamily: 'visuelt-regular', fontSize: '14px',  textAlign: 'left', alignItems: 'center',lineHeight: '32px'}} >
					Tandem supports both partnership- and customer-specific configurations and settings, so you can manipulate or set values in your workflows at the level that you need to.
				</Text>
			</div>
		</div>
		<div className={cx(classes.hiddenMobileMedium)} style={{height: '900px', width: '100%', backgroundColor: '#9596FF', flexDirection:'column'}}>
                <div style={{height: '85%', width: '100%',  padding: 100}}>
                    <div style={{width: '100%',display:'flex', justifyContent:'space-between', paddingBottom: 20}}>
                        <div style={{display:'flex', alignItems:'center'}}>
							<Text sx={{fontFamily:'vulf-sans-bold'}}>
								Supported Open API versions:
							</Text>
							<div style={{width: '10px'}} />
							<Badge color={'#B5B6FF'}>
								<Text sx={{fontFamily:'Visuelt', color:'black'}}>
									v2.X
								</Text>
							</Badge>
							<div style={{width: '10px'}} />
							<Badge color={'#B5B6FF'}>
								<Text sx={{fontFamily:'Visuelt', color:'black'}}>
									v3.X
								</Text>
							</Badge>
						</div>
                        <Anchor underline color={'dark'} sx={{fontFamily:'visuelt-regular'}}>
                            How do I get an API Spec?
                        </Anchor>
                    </div>
							{
								uploadJob && uploadJob.status == 'COMPLETE' ? (
									<div style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', backgroundColor:'#EAEAFF', padding: 20, borderRadius: 20}}>
										<div style={{borderRadius:'20px', alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'row',width: '100%', height: '200px'}}>
											<Card radius='lg' sx={{backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
												<Card.Section sx={{ display: 'flex',flexDirection: 'row', width:'100%', height: '100%', alignItems:'center', justifyContent:'flex-start'}}>
													<div style={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start', padding: 20}}>
														<Text sx={{fontFamily: 'Visuelt', fontSize: '24px', fontWeight: 600}}>
															We have successfully validated your API
														</Text>
														<Text sx={{fontFamily: 'Visuelt', fontSize: '18px', fontWeight: 100, color: '#3D3D3D'}}>
															You are good to start using Tandem!
														</Text>
														<div style={{height: '20px'}}/>
														<Button onClick={()=>{router.push(process.env.NEXT_PUBLIC_APP_BASE_URL + '/api/auth/login')}} radius="lg" sx={{ width: '300px', height: '50px', fontFamily: 'visuelt-regular',fontSize: '18px',fontWeight: 600,backgroundColor: 'black',borderRadius: 10,color: 'white','&:hover': {backgroundColor: '#3E3E3E',color: 'white'}}}>
															Start Using Tandem
														</Button>
													</div>    
												</Card.Section>
											</Card>
           								</div>
										<div style={{padding: 10, borderRadius: 8, display:'flex', flexDirection:'column',height: '150px',width: '500px', alignItems: 'flex-start', justifyContent: 'center', border: '2px solid black', backgroundColor: 'white' }}>
											<div style={{display:'flex', flexDirection:'row', alignItems:'center', }}>
												<AiOutlineCheckCircle style={{height: 24, width: 24, color: 'black', backgroundColor: '#A9E579', borderRadius:'60%'}}/>
												<div style={{width: 10}}/>
												<Text sx={{fontFamily: 'Visuelt', fontSize: '16px'}}>{uploadJob?.metadata?.schema?.count} Schemas</Text> 
											</div>
											<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
												<AiOutlineCheckCircle style={{height: 24, width: 24, color: 'black', backgroundColor: '#A9E579', borderRadius:'60%'}}/>
												<div style={{width: 10}}/>
												<Text sx={{fontFamily: 'Visuelt', fontSize: '16px'}}>{uploadJob?.metadata?.actions?.count} Actions</Text> 
											</div>
											<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
												<AiOutlineCheckCircle style={{height: 24, width: 24,color: 'black', backgroundColor: '#A9E579', borderRadius:'60%'}}/>
												<div style={{width: 10}}/>
												<Text sx={{fontFamily: 'Visuelt', fontSize: '16px'}}>{uploadJob?.metadata?.parameters?.count} Parameters</Text> 
											</div>
											<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
												<AiOutlineCheckCircle style={{height: 24, width: 24, color: 'black', backgroundColor: '#A9E579', borderRadius:'60%'}}/>
												<div style={{width: 10}}/>
												<Text sx={{fontFamily: 'Visuelt', fontSize: '16px'}}>{uploadJob?.metadata?.webhooks?.count} Webhooks</Text> 
											</div>
											<div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
												<AiOutlineCheckCircle style={{height: 24, width: 24, color: 'black', backgroundColor: '#A9E579', borderRadius:'60%'}}/>
												<div style={{width: 10}}/>
												<Text sx={{fontFamily: 'Visuelt', fontSize: '16px'}}>{uploadJob?.metadata?.securitySchemes?.count} Security Schemes</Text> 
											</div>
										</div>
									</div>
								): (
										<div style={{display:'flex', flexDirection:'row', alignContent: 'center', justifyContent: 'center', backgroundColor:'#B5B6FF', padding: 20, borderRadius: 20}}>
											<div style={{width: '50%'}}>
												<ImportApiDropzone isUploading={isUploading} uploadJob={uploadJob} fileJson={fileJson} setFileJson={setFileJson}/>
											</div>
											<div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'column'}}>
												<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%', padding: 50}}>
													<div style={{display: 'flex', justifyContent: 'flex-start', width: '100%', paddingLeft: 60}}>
															<TextInput sx={{width: '70%'}} label={ <Text sx={{fontFamily: 'Visuelt'}}>Drop your email for the results</Text> } placeholder="ex. email@example.com" {...form.getInputProps('email')}/>
															<div style={{width: '20px'}} />
															<Button onClick={()=>{
																processJsonFile(fileJson, form.values.email).then((res)=>{
																	setUploadJob(res)
																})
															}} disabled={!canValidate} sx={{marginTop: 25, backgroundColor:'black', fontFamily: 'Visuelt', fontWeight: 300, borderRadius: 8, '&:hover':{
																backgroundColor: '#3E3E3E',
															}}}>Validate my spec</Button>
													</div>
													<div style={{height: '20px'}} />
													<div style={{display: 'flex', justifyContent: 'flex-start', width: '100%', paddingLeft: 60}}>
														<Checkbox color="dark" label="I agree to the terms and conditions" />
													</div>
												</div>					
											</div>
										</div>
									)
								}
                    <div style={{display:'flex',flexDirection:'column', justifyContent: 'center',height: '38c0px',width: '100%'}}>
                        <Text sx={{width: '50%', lineHeight: '120px', fontFamily:'vulf-sans-bold', fontSize: '94px'}}>
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

		{/* Mobile Footer */}
		<div className={cx(classes.hiddenDesktop)} style={{height: '380px', width: '100%', backgroundColor: '#9596FF', flexDirection:'column'}}>
             
                <div style={{height: '18%', width: '100%', backgroundColor:'#B5B6FF', display:'flex', alignItems: 'center', flexDirection:'column', justifyContent:'center', borderTopRightRadius: 90, borderTopLeftRadius: 90}}>
                        <Image src={primaryLockupBlack} alt="Primary Lockup Black" width={100}/>
						<div style={{height: '10px'}} />
                        <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px'}}>
                            © 2021 Tandem Inc. All Rights Reserved.
                        </Text>
                </div>
        </div>
    </div>
  )
}

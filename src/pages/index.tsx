import { Container, Text, Button, BackgroundImage, Card, SimpleGrid, SegmentedControl, Image, createStyles} from '@mantine/core'
import Head from 'next/head'
import HeaderAction from '../components/header'
import purpleSlider from '../../public/landing-page-purple-slider.svg'
import {useState} from 'react'
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

import SchemaAnimation from '../../public/animations/ValueProp_Section1.json'
import WorkflowAnimation from '../../public/animations/ValueProp_Section2.json'
import FormulaAnimation from '../../public/animations/ValueProp_Section3.json'

import downArrowIcon from '../../public/icons/arrow.svg'
import verticalDots from '../../public/icons/dots.svg'


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
  }));


export default function Home() {

  const [selectedHowItWorks, setSelectedHowItWorks] = useState('a')
  const { classes, cx } = useStyles();

  const testData = [
	  {
			"link": "/about",
			"label": "Features"
		},
		{
			"link": "#1",
			"label": "Learn",
			"links": [{
					"link": "/docs",
					"label": "Documentation"
				},
				{
					"link": "/resources",
					"label": "Resources"
				},
				{
					"link": "/community",
					"label": "Community"
				},
				{
					"link": "/blog",
					"label": "Blog"
				}
			]
		},
		{
			"link": "/about",
			"label": "About"
		},
		{
			"link": "/pricing",
			"label": "Pricing"
		},
		{
			"link": "#2",
			"label": "Support",
			"links": [{
					"link": "/faq",
					"label": "FAQ"
				},
				{
					"link": "/demo",
					"label": "Book a demo"
				},
				{
					"link": "/forums",
					"label": "Forums"
				}
			]
		}
	]

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


  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Head>
        <title>Tandem</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderAction links={testData} />
	  <div
	  	style={{
			height: '700px',
			width: '100vw',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
			boxSizing: 'border-box',
			position: 'relative',
		}}
	  >
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width:'30%',
				height: '100%',
				alignItems:'flex-start',
		
			}}
		>
			<Player
				autoplay
				loop
				src={heroLeftAnimation}
				style={{position:'absolute', height: '800px', width: '800px', marginLeft: -280}}
			/>
		</div>
		<div 
		style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%',width:'40%'}}>
				<div style={{display: 'flex', flexDirection: 'row',backgroundColor: '#D9FAC0', width: '500px', height: '110px', borderRadius: 10,alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
					<Text sx={{marginTop: -20,fontSize: '96px',fontFamily: 'vulf-sans-bold'}}>
						Integrate
					</Text>
				</div>
				<Text sx={{fontSize: '96px',fontFamily: 'vulf-sans-bold',lineHeight: '129px',textAlign: 'center'}}>
					in tandem
				</Text>
				<div style={{
					height: '20px',
				}}
				/>
				<Text
					sx={{
						fontSize: '22px',
						fontWeight: 100,
						lineHeight: '32px',
						width: '610px',
						textAlign: 'center',
						fontFamily: 'visuelt-regular',
						color: '#3E3E3E'
					}}

				>
					Turn your partnership API documentation into a simple, powerful, no-code workspace.
				</Text>
				<div style={{
					height: '40px'
				}}
				/>
				<Button
					sx={{
						width: '221px', 
						height: '76px',
						fontFamily: 'visuelt-regular',
						fontSize: '24px',
						fontWeight: 400,
						backgroundColor: 'black',
						color: 'white',
						'&:hover': {
							backgroundColor: '#3E3E3E',
							color: 'white',
						},

					}}
					radius="lg"
				>
					Get Started
				</Button>
		</div>
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width:'30%',
				height: '100%',
				alignItems:'flex-start',
				boxSizing: 'border-box',
				overflow: 'hidden'
			}}
		>
			<Player
				autoplay
				loop
				src={heroRightAnimation}
				style={{position:'absolute', height: '800px', width: '800px'}}
			/>
		</div>
	  </div>
      
	  <div style={{
		  display: 'flex',
		  flexDirection: 'column',
		  alignItems: 'center',
		  justifyContent: 'center',
		  height: '476px',
		  position: 'relative',

	  }}>
		<div style={{height: '69px', width: '256px'}} >
			<Player
				autoplay
				loop
				src={sliderAnimation}
			/>
		</div>
		<div style={{height: '40px'}} />
		  <Text	
			sx={{
				fontSize: '62px',
				fontFamily:'vulf-sans-bold',
				lineHeight: '64px',
				width: '1000px',
				textAlign: 'center',
			}}
			>
			Move fast and launch things
		</Text>
		<div style={{height: '40px'}} />
		<Text
		sx={{
			fontSize: '22px',
			fontWeight: 400,
			width: '700px',
			fontFamily: 'visuelt-regular',
			textAlign: 'center',
		}}>
			Tandem unblocks teams working on software partnerships between organizations.  PMs, engineers, and account managers can scope and launch integrations with speed, clarity, and efficiency.
		</Text>
	  </div>
	  <div style={{ padding: 100, height: '721px', display:'flex', flexDirection: 'column', width: '100vw'}}>
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
			paddingTop: 60,
			position: 'relative'
		}}>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				width: '580px',
				height: '100%'
			}}>
				<Text sx={{
					fontSize: '76px',
					fontWeight: 700,
					lineHeight: '64px',
					textAlign: 'left',
					fontFamily: 'vulf-sans-bold',
				}}>
				How it works
				<div style={{height: '40px'}} />
			</Text>
				{
					howItWorksData.map((item, index) => {
						return (
							<div key={item.id+item.label} style={{display:'flex', paddingBottom: 20}}>
								<div className={
										selectedHowItWorks === item.id ? cx(classes.activeHowItWorks) : cx(classes.howItWorks)
									}
										onClick={() => {
											setSelectedHowItWorks(item.id)
										}}
										style={{
											display: 'flex',
											flexDirection: 'row',
											width: '1000px',
										
											paddingLeft: 10,
											borderRadius: 10
										}}
									>
									<Text
										sx={{
											fontSize: '32px',
											fontWeight: 700,
											lineHeight: '64px',
											textAlign: 'left',
											fontFamily: 'vulf-sans-bold',
										}}
									>
										{item.label}
									</Text>
								</div>
								
							</div>
								
							)
					})
				}
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '170px',
				height: '200px',
				marginLeft:-20,
				marginRight: -70
			}}>
				{
					selectedHowItWorks === "a" ? (
						<Player
							autoplay
							loop
							src={howItWorksLineAnimationA}
							style={{
								marginBottom:-50
							}}
						/>
					) :  selectedHowItWorks === "b" ? (
						<Player
							autoplay
							loop
							src={howItWorksLineAnimationB}
							style={{
								marginBottom:-75
							}}
						/>
					):  selectedHowItWorks === "c" ? (
						<Player
							autoplay
							loop
							src={howItWorksLineAnimationC}
							style={{
								marginBottom:-100
							}}
						/>
					) : selectedHowItWorks === "d" ? (
						<Player
						  autoplay
						  loop
						  src={howItWorksLineAnimationD}
						  style={{
							marginBottom:-140
						}}
						/>
					) : selectedHowItWorks === "e" ? (
						<Player
						  autoplay
						  loop
						  src={howItWorksLineAnimationE}
						  style={{
							marginBottom:-170
						}}
						/>
					) : (null)
				}
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '500px',
				height: '100%',
				paddingTop: 90
			}}>
					<Card radius={'lg'} sx={{
						border: '1px solid #000000',
						height: '260px',
						alignItems: 'center',
						}}>
						<Card.Section sx={{
							backgroundColor:'#D9FAC0',
							width: '400px',
							height: '40px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',

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
								width: '400px',
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
	  </div>
	  <div
	  	style={{
			height: '1190px',
			width: '100vw',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',

		}}
	  >	
	  	<Text
			sx={{
				fontFamily: 'vulf-sans-bold',
				fontSize: '66px',
				width: '800px',
				textAlign: 'center',
			}}
		>
			Level up your integrations program
		</Text>
		<div>
			<div style={{height: '46px'}} />
			<SimpleGrid cols={2}
					spacing={46}
			>
				
			{
				levelUpData.map((item) => {
					return (
						<div
							key={item.id}
							style={{
								width: '585px',
								height: '350px',
								borderRadius: 10,
								border: '1px solid #000000',
								backgroundColor: item.color
							}}
						>
							<div
								style={{
									width: '100%',
									alignItems:'flex-end',
									justifyContent: 'flex-end',
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								<Player
									autoplay
									loop
									src={item.animation}
									style={{
										width: '150px',
										height: '100%',
									}}
								/>
							</div>
							<div
								style={{
									width: '100%',
									paddingLeft: 30,
									paddingRight: '140px',
									alignItems:'flex-start',
									display: 'flex',
									flexDirection: 'column',
									marginTop: -10
								}}
							>
								<Text sx={{
									fontFamily:'vulf-sans-bold',
									fontSize: '28px',
									lineHeight: '30px',
								}}>
									{item.label}
								</Text>
								<div style={{height: '20px'}} />
								<Text sx={{
									fontFamily:'visuelt-regular',
									fontSize: '16px',
								}}>
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
	<div 
		style={{
			height: '685px',
			width: '100vw',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		}}
	>
		<div style={{
				display: 'flex',
				flexDirection: 'row',
				width:'50%',
				maxHeight: '500px',
				maxWidth: '600px',
				height: '700px',
				alignItems:'flex-start',
				marginLeft: -140,
				overflow: 'auto'
			}}
		>
			<Player
				autoplay
				loop
				src={SchemaAnimation}
				style={{
					maxHeight: '500px'
				}}
				/>
		</div>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '600px',
				paddingLeft: 300,
				alignItems:'center'
			}}
		>

			<Text
				sx={{
					fontFamily: 'vulf-sans-bold',
					fontSize: '50px',
					width: '600px',
					alignItems: 'center',
					lineHeight: '60px',
					
				}}
			>
				Built on industry API
			</Text>
			<div
				style={{
					backgroundColor:'#FFBD9A',
					width:'600px',
					height: '75px',
					borderRadius: 10,
				}}
			>
				<Text
				sx={{
					fontFamily: 'vulf-sans-bold',
					fontSize: '50px',
					width: '600px',
					textAlign: 'left',
					alignItems: 'center',
					lineHeight: '60px',
				}}
			>
				specification standards
			</Text>

			</div>
			
			<div style={{height: '30px'}} />
			<Text
			sx={{
				fontFamily: 'visuelt-regular',
				fontSize: '18px',
				width: '650px',
				textAlign: 'left',
				alignItems: 'center',
				lineHeight: '32px',
				paddingLeft: 30,
			}}
			>
			Tandem currently supports API specification imports of Open API (v2 & v3) and Postman collections. Because we provide a lot of functionality after import, we have requirements of the data we ingest before it can be used. Check if your API is compatibility here.
			</Text>

		</div>

	</div>
	<div 
		style={{
			height: '685px',
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		}}
	>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '50%',
				paddingLeft: 100,
				marginTop: -8
				
			}}
		>

			<Text
				sx={{
					fontFamily: 'vulf-sans-bold',
					fontSize: '50px',
					width: '600px',
					textAlign: 'left',
					alignItems: 'center',
					lineHeight: '60px',
				}}
			>
				Integrate what you 
			</Text>
			<div
				style={{display: 'flex',flexDirection:'row'}}
			>
				<div>
					<Text
						style={{
							fontFamily: 'vulf-sans-bold',
							fontSize: '50px',
							
							textAlign: 'left',
							alignItems: 'center',
							lineHeight: '60px',
						}}
					>
						want, 
					</Text>
				</div>
				<div
				style={{
					backgroundColor:'#EAEAFF',
					width:'400px',
					height: '75px',
					borderRadius: 10,
				}}
			>
				
				<Text
				sx={{
					fontFamily: 'vulf-sans-bold',
					fontSize: '50px',
					width: '800px',
					textAlign: 'left',
					alignItems: 'center',
					lineHeight: '60px',
				}}
			>
				when you want
			</Text>

			</div>
			</div>
			
			
			<div style={{height: '30px'}} />
			<Text
			sx={{
				fontFamily: 'visuelt-regular',
				fontSize: '18px',
				width: '800px',
				textAlign: 'left',
				alignItems: 'center',
				lineHeight: '32px',
			}}>
				No need to wait for us to build support for integration-specific business logic. Tandem uses your API documentation to populate your workflow triggers and actions. So if your APIs support it, we can use it.			
			</Text>
		
		</div>
		<div style={{
				marginRight:-300,
				width:'60%',
				alignItems:'flex-start',
				
			}}
		>
			<Player
				autoplay
				loop
				src={WorkflowAnimation}

				/>
		</div>
	</div>

    </div>
  )
}

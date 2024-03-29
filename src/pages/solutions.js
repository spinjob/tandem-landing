import { Text, Button, Image, Group, Card, Badge, createStyles, Divider } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import Head from 'next/head'
import HeaderAction from '../components/header'
import React, {useState, useEffect, useCallback} from 'react'
import pricingHeroLeft from '../../public/images/pricing/Pricing-Hero-Left.svg'
import pricingHeroRight from '../../public/images/pricing/Pricing-Hero-Right.svg'
import pricingHeroMobileBanner from '../../public/images/pricing/Pricing-Mobile-Hero-Banner.svg'
import desktopFeatureBreakdown from '../../public/images/pricing/Desktop-Feature-Breakdown.svg'
import closeIcon from '../../public/icons/delete-disabled.svg'
import checkIcon from '../../public/icons/done-check.3.svg'
import primaryLockupBlack from '../../public/logos/SVG/Primary Lockup_Black.svg'
import { useRouter } from 'next/router';
import ReactPlayer from "react-player/lazy"

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
    supportedPricingListItem: {
        fontFamily:'visuelt-regular',
        color:'#5a5a5a', 
        fontSize: '14px',
    },
    unsupportedPricingListItem: {
        fontFamily:'visuelt-regular',
        color:'#858585', 
        fontSize: '14px',
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


const Solutions = () => {
	const { classes, cx, theme } = useStyles();
    const [activePricingCard, setActivePricingCard] = useState('a')
    const router = useRouter();
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          setHasWindow(true);
        }
      }, []);


    return (
        <div style={{width: '100vw', height: '100vh', maxWidth: '100%'}}>
            <HeaderAction/>
            <div style={{ marginTop: 80, height: '700px', width: '100vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',boxSizing: 'border-box',position: 'relative'}}>
                <div className={cx(classes.hiddenMobileMedium)} style={{ flexDirection: 'row', width:'30%',height: '100%', paddingTop: 80, alignItems:'flex-start'}} >
                    <Image alt="pricingHeroLeft" src={pricingHeroLeft} style={{position:'absolute', height: '400px', width: '400px', marginLeft: -100}}/>
                </div>
                <div className={cx(classes.hiddenMobileSmall)} style={{width: '30%',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%',width:'40%'}}>
                        <Text sx={{marginTop: -20,fontSize: '96px',fontFamily: 'vulf-sans-bold'}}>
                            Alphas
                        </Text>
                    <div style={{ height: '20px'}} />
                    <Text sx={{
                        fontSize: '22px',
                        fontWeight: 100,
                        lineHeight: '32px',
                        width: '610px',
                        textAlign: 'center',
                        fontFamily: 'visuelt-regular',
                        color: '#3E3E3E'
                    }}>
                        Our team is heads down building solutions that simplify integration operations for our customers. We are currently looking for early adopters to help us shape the future of integration operations.
                    </Text>                    <div style={{height: '40px'}}/>
                    <Button onClick={()=>{router.push("https://calendly.com/spencer-tandem/tandem-demo")}} radius="lg"  sx={{ width: '221px', height: '76px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'black',color: 'white',
                            '&:hover': {
                                backgroundColor: '#3E3E3E',
                                color: 'white',
                            }}}>
                        Chat With Us
                    </Button>
                </div>

                {/* Mobile Hero Section */}
                <div className={cx(classes.hiddenDesktop)} style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'center', marginTop: -150}}>
                    <Text sx={{marginTop: -20,fontSize: '66px',fontFamily: 'vulf-sans-bold'}}>
                        Alphas
                    </Text>
                    <div style={{ height: '20px'}} />
                    <Text sx={{ width: '80%', fontSize: '20px', fontWeight: 100, lineHeight: '32px', textAlign: 'center', fontFamily: 'visuelt-regular', color: '#3E3E3E'}} >
                        Have an API spec ready to go? Get started with Tandem right away.  Looking for extra help or have questions about solutions or roadmaps? Book a time to chat.
                    </Text>
                    <div style={{ height: '40px' }} />
                    <Button radius="lg" onClick={()=>{ router.push("https://calendly.com/spencer-tandem/tandem-demo")}} sx={{ width: '80%',  height: '60px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'black',borderRadius: 10,color: 'white',
                        '&:hover': {
                                backgroundColor: '#3E3E3E',
                                color: 'white',
                            }}}>
                        Chat With Us
                    </Button>
                </div>
                <div className={cx(classes.hiddenMobileMedium)} style={{ flexDirection: 'row', width:'30%', height: '100%', paddingTop: 70,  alignItems:'flex-start', boxSizing: 'border-box',overflow: 'hidden'}}>
                    <Image alt="pricingHeroRight" src={pricingHeroRight} style={{position:'absolute', height: '380px', width: '380px', marginLeft: 190}}/>
                </div>
            </div>
            <div className={cx(classes.hiddenDesktop)} style={{ width: '100%', marginTop: -120, paddingBottom: 10}} >
			        <Image alt="mobileBanner" src={pricingHeroMobileBanner} />
                    <div style={{height: '40px'}} />
            </div>
            {/* Desktop Solutions */}
            <div className={cx(classes.hiddenMobileMedium)} style={{flexDirection:'column', width: '100%'}}>
                <div style={{display: 'flex', flexDirection:'row', padding: 30, width: '100%'}}>
                    <div style={{width: '25%'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'40%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                            {
                                hasWindow && <ReactPlayer url="https://youtu.be/iX8OiTsvBbU"/>
                            }
                    </div>
                    <div style={{width: '5%'}}/>
                    <div style={{display: 'flex',padding: 30, flexDirection:'column', width:'60%', backgroundColor: '#FFD1CD', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            CODE GENERATION
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                AI Assisted Development
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                GPT Eng
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                           Looking for a quick Python implementation of your integration scope? Tandem is building a code generation tool to quickly spin up a Python application that can be used as a starting point for your integration. This is an early version of the tool and can (and will) be updated based on user feedback and experience with their use cases.
                        </Text>
                    </div>
                    <div style={{width: '25%'}}/>
                </div>
                <div style={{display: 'flex', flexDirection:'row', padding: 30, width: '100%'}}>
                    <div style={{width: '25%'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'column', width:'60%', backgroundColor: '#EAEAFF', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            INTEGRATION DOCS
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Workflow Builder
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Generative AI
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                            Tandem&apos;s Scope solution provides integration managers a no-code workflow builder to design API integration workflows, map and adapt data at the property-level, and generate a scoping document for the development team to use. Additional features include AI-driven workflow generation, AI-suggested data mappings, and workflow logic validation, and workflow test executions.
                        </Text>
                        <div style={{height: '20px'}}/>
                    </div>
                    <div style={{width: '5%'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'40%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                        {
                            hasWindow && <ReactPlayer url="https://youtu.be/BNzDBhWJFHc"/>
                        }
                    </div>
                    <div style={{width: '25%'}}/>
                </div>   
                <div style={{display: 'flex', flexDirection:'row', padding: 30, width: '100%'}}>
                    <div style={{width: '25%'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'40%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                            {
                                hasWindow && <ReactPlayer url="https://youtu.be/hKj4adzGryc"/>
                            }
                    </div>
                    <div style={{width: '5%'}}/>
                    <div style={{display: 'flex',padding: 30, flexDirection:'column', width:'60%', backgroundColor: '#F0FDE6', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            API ASSISTANT
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Vector Database
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Generative AI
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                            Tandem&apos;s AI-powered API Assistant aims to cut down the time spent answering repetitive or deeply buried queries in API documentation by delivering precise responses straight from the specs and user-guided docs. This is an early version of the tool and can (and will) be updated based on user feedback and experience with their use cases.
                        </Text>
                    </div>
                    <div style={{width: '25%'}}/>
                </div>         
            </div>
            
            {/* Mobile Solutions */}
            <div className={cx(classes.hiddenDesktop)} style={{flexDirection:'column', width: '100%'}}>
            <div style={{display: 'flex', flexDirection:'column', padding: 30, width: '100%'}}>
                <div style={{display: 'flex',padding: 30, flexDirection:'column', width:'100%', backgroundColor: '#FFD1CD', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            CODE GENERATION
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                AI Assisted Development
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#FFA39E', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                GPT Eng
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                            Looking for a quick Python implementation of your integration scope? Tandem is building a code generation tool to quickly spin up a Python application that can be used as a starting point for your integration. This is an early version of the tool and can (and will) be updated based on user feedback and experience with their use cases.
                        </Text>
                    </div>
                    <div style={{height: '20px'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'100%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                            {
                                hasWindow && <ReactPlayer url="https://youtu.be/iX8OiTsvBbU"/>
                            }
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'column', padding: 30, width: '100%'}}>
                    <div style={{display: 'flex',padding: 30, flexDirection:'column', width:'100%', backgroundColor: '#EAEAFF', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            INTEGRATION DOCS
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Workflow Builder
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#9596FF', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Generative AI
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                            Tandem&apos;s Scope solution provides integration managers a no-code workflow builder to design API integration workflows, map and adapt data at the property-level, and generate a scoping document for the development team to use. Additional features include AI-driven workflow generation, AI-suggested data mappings, and workflow logic validation, and workflow test executions.
                        </Text>
                    </div>
                    <div style={{height: '20px'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'100%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                            {
                                hasWindow && <ReactPlayer url="https://youtu.be/BNzDBhWJFHc"/>
                            }
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'column', padding: 30, width: '100%'}}>
                    <div style={{display: 'flex',padding: 30, flexDirection:'column', width:'100%', backgroundColor: '#F0FDE6', border: '1px solid black', borderRadius:10}}>
                        <Text sx={{fontFamily: "vulf-sans-bold", fontSize:'40px'}}>
                            API ASSISTANT
                        </Text>
                        <div style={{height: '20px'}}/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Alpha
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Vector Database
                            </Badge>
                            <div style={{width: '10px'}}/>
                            <Badge sx={{backgroundColor: '#B4F481', color: 'black', fontFamily: 'visuelt-regular', fontSize: '16px', fontWeight: 400, borderRadius: 10, padding: 10}}>
                                Generative AI
                            </Badge>
                        </div>
                        <div style={{height: '20px'}}/>
                        <Text sx={{fontFamily: "visuelt-regular", fontSize:'20px'}}>
                            Tandem&apos;s AI-powered API Assistant aims to cut down the time spent answering repetitive or deeply buried queries in API documentation by delivering precise responses straight from the specs and user-guided docs. This is an early version of the tool and can (and will) be updated based on user feedback and experience with their use cases.
                        </Text>
                    </div>
                    <div style={{height: '20px'}}/>
                    <div style={{display: 'flex', padding: 30, flexDirection:'row', width:'100%', backgroundColor: 'white', border: '1px solid black', borderRadius:10}}>
                            {
                                hasWindow && <ReactPlayer url="https://youtu.be/hKj4adzGryc"/>
                            }
                    </div>
                </div>
            </div>
       	{/* Mobile Footer */}
            <div className={cx(classes.hiddenDesktop)} style={{height: '80px', width: '100%', backgroundColor:'#F8F6F3', alignItems: 'center', flexDirection:'column', justifyContent:'center', borderTopRightRadius: 50, borderTopLeftRadius: 50}}>
                <Image src={primaryLockupBlack} alt="Primary Lockup Black" width={100}/>
                <div style={{height: '10px'}} />
                <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px'}}>
                    © 2023 InTandem Technologies Inc. All Rights Reserved.
                </Text>
            </div>
        </div>
             
			
    )
}

export default Solutions
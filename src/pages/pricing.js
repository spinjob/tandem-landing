import { Text, Button, Image, Group, Card, createStyles, Divider } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import Head from 'next/head'
import HeaderAction from '../components/header'
import {useState, useEffect, useCallback} from 'react'
import pricingHeroLeft from '../../public/images/pricing/Pricing-Hero-Left.svg'
import pricingHeroRight from '../../public/images/pricing/Pricing-Hero-Right.svg'
import pricingHeroMobileBanner from '../../public/images/pricing/Pricing-Mobile-Hero-Banner.svg'
import desktopFeatureBreakdown from '../../public/images/pricing/Desktop-Feature-Breakdown.svg'
import closeIcon from '../../public/icons/delete-disabled.svg'
import checkIcon from '../../public/icons/done-check.3.svg'

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


const Pricing = () => {
	const { classes, cx, theme } = useStyles();
    const [activePricingCard, setActivePricingCard] = useState('a')
    
    const pricingData = [{
        id:'a',
        label: 'Explore',
        price: 'Free Forever',
        description: 'Import your API and organize them into Partnerships',
        features: [
            {label: '1 user', limit: '1', supported: true, category: 'Users'},
            {label: 'Unlimited APIs', limit: 'Unlimited', supported: true,category: 'APIs'},
            {label: 'Unlimited Partnerships', limit: 'Unlimited', supported: true,category: 'Partnerships'},
            {label: 'Basic Support', limit: 'Basic', supported: true,category: 'Support'},
            {label: 'No Workflows', limit: '0', supported: false,category: 'Workflows'},
            {label: 'No Invocations', limit: '0', supported: false,category: 'Invocations'}
        ],
        available: true
    },{
        id:'b',
        label: 'Scope',
        price: '$80 / month',
        description: 'Design workflows between imported APIs and export documentation.',
        features: [
            {label: 'Unlimited users', limit: 'Unlimited', supported: true, category: 'Users'},
            {label: 'Unlimited APIs', limit: 'Unlimited', supported: true,category: 'APIs'},
            {label: 'Unlimited Partnerships', limit: 'Unlimited', supported: true,category: 'Partnerships'},
            {label: 'Unlimited Workflows', limit: 'Unlimited', supported: false,category: 'Workflows'},
            {label: 'Email Support', limit: 'Email', supported: true,category: 'Support'},
            {label: 'No Invocations', limit: '0', supported: false,category: 'Invocations'}
        ],
        available: true
    },{
        id:'c',
        label: 'Validate',
        price: 'Coming Soon',
        description: 'Validate your API integration designs with one-off workflow invocations.',
        features: [
            {label: 'Unlimited users', limit: 'Unlimited', supported: true, category: 'Users'},
            {label: 'Unlimited APIs', limit: 'Unlimited', supported: true,category: 'APIs'},
            {label: 'Unlimited Partnerships', limit: 'Unlimited', supported: true,category: 'Partnerships'},
            {label: 'Unlimited Workflows', limit: 'Unlimited', supported: true,category: 'Workflows'},
            {label: 'Premium Support', limit: 'Premium', supported: true,category: 'Support'},
            {label: 'One-off Invocations', limit: 'One-off', supported: true,category: 'Invocations'},
            {label: 'Custom Invocations', limit: 'Custom', supported: false,category: 'Invocations'}
        ],
        available: false
    },{
        id:'d',
        label: 'Deploy',
        price: 'Coming Soon',
        description: 'Deploy and run your API integration designs in Tandem with custom trigger and data mapping logic.',
        features: [
            {label: 'Unlimited users', limit: 'Unlimited', supported: true, category: 'Users'},
            {label: 'Unlimited APIs', limit: 'Unlimited', supported: true,category: 'APIs'},
            {label: 'Unlimited Partnerships', limit: 'Unlimited', supported: true,category: 'Partnerships'},
            {label: 'Unlimited Workflows', limit: 'Unlimited', supported: true,category: 'Workflows'},
            {label: 'Premium Support', limit: 'Premium', supported: true,category: 'Support'},
            {label: 'One-off Invocations', limit: 'One-off', supported: true,category: 'Invocations'},
            {label: 'Custom Invocations', limit: 'Custom', supported: true,category: 'Invocations'}
        ],
        available: false
    }]

    const renderFeatureListItem = (feature) => {

        return feature?.supported ? ( 
            <div key={feature.label} style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                <div style={{height: 20, width: 20}}>
                    <Image src={checkIcon}/>
                </div>
                <div style={{width: 5}}/>
                <Text className={cx(classes.supportedPricingListItem)}>
                    {feature.label}
                </Text>
            </div>
        ) : (
            <div  key={feature.label} style={{display:'flex', flexDirection:'row', paddingBottom: 5, opacity: '50%'}}>
                <div style={{height: 20, width: 20}}>
                    <Image src={closeIcon}/>
                </div>
                <div style={{width: 5}}/>
                <Text className={cx(classes.unsupportedPricingListItem)}>
                    {feature.label}
                </Text>
            </div>
        )
    }

    const renderPricingCard = (pricingCard) => {
        return (
            <Card opacity={pricingCard.available ? '100%' : '50%'} radius={'md'} sx={{border: activePricingCard == pricingCard.id ? '1px solid black' : '1px solid #EBEBEB'}}>
                <Card.Section sx={{height: 90, border: '1px solid #EBEBEB', padding: 20}}>
                    <div style={{height: '100%', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
                        <Text sx={{fontFamily:'visuelt-medium', fontSize:'22px', fontWeight: 600}}>
                            {pricingCard.label}
                        </Text>
                        <Text sx={{fontFamily:'visuelt-regular', fontSize:'14px', color: '#858585', fontWeight: 500}}>
                            {pricingCard.price}
                        </Text>
                    </div>
                </Card.Section>
                <Card.Section sx={{height: 300, border: activePricingCard == pricingCard.id ? '0px solid black' : '1px solid #EBEBEB', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start', marginLeft: -20, padding: 20}}>
                        {
                            pricingCard.features.map((feature) => {
                                return renderFeatureListItem(feature)
                            })
                        }
                    </div>
                    <div style={{height:'100px'}}/>
                    <div style={{display:'flex', flexDirection:'row', paddingBottom: 10}}>
                        <Button disabled={
                            !pricingCard.available
                        } radius="md" sx={{ 
                            border: activePricingCard == pricingCard.id ? '0px' : '1px solid black', 
                            width: 220, 
                            height: 44,  
                            fontFamily: 'visuelt-regular',
                            fontSize: '16px',
                            fontWeight: 400, 
                            backgroundColor: activePricingCard == pricingCard.id ? '#B4F481' : 'white', 
                            borderRadius: 10,
                            color: 'black',
                            '&:hover': {
                                backgroundColor: '#B4F481',
                                color: 'black',
                                border: '0px'
                            }
                            }}>
                            <Text>
                                {pricingCard.available ? 'Get Started' : 'Coming Soon'}
                            </Text>
                        </Button>
                    </div>
                </Card.Section>
            </Card>
        )
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
                <div className={cx(classes.hiddenMobileMedium)} style={{ flexDirection: 'row', width:'30%',height: '100%', paddingTop: 80, alignItems:'flex-start'}} >
                    <Image alt="pricingHeroLeft" src={pricingHeroLeft} style={{position:'absolute', height: '400px', width: '400px', marginLeft: -100}}/>
                </div>
                <div className={cx(classes.hiddenMobileSmall)} style={{width: '30%',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%',width:'40%'}}>
                        <Text sx={{marginTop: -20,fontSize: '96px',fontFamily: 'vulf-sans-bold'}}>
                            Pricing
                        </Text>
                    <div style={{ height: '20px'}} />
                    <Text sx={{fontSize: '22px',fontWeight: 100,lineHeight: '32px',width: '610px',textAlign: 'center',fontFamily: 'visuelt-regular',color: '#3E3E3E'}}>
                        Have an API spec ready to go? Get started with Tandem right away.  Looking for extra help or have questions about solutions or roadmaps? Book a time to chat.
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
                    <Text sx={{marginTop: -20,fontSize: '66px',fontFamily: 'vulf-sans-bold'}}>
                            Pricing
                    </Text>
                    <div style={{ height: '20px'}} />
                    <Text sx={{ width: '80%', fontSize: '20px', fontWeight: 100, lineHeight: '32px', textAlign: 'center', fontFamily: 'visuelt-regular', color: '#3E3E3E'}} >
                        Have an API spec ready to go? Get started with Tandem right away.  Looking for extra help or have questions about solutions or roadmaps? Book a time to chat.
                    </Text>
                    <div style={{ height: '40px' }} />
                    <Button radius="lg"  sx={{ width: '80%',  height: '60px',fontFamily: 'visuelt-regular',fontSize: '24px',fontWeight: 400,backgroundColor: 'black',borderRadius: 10,color: 'white',
                        '&:hover': {
                                backgroundColor: '#3E3E3E',
                                color: 'white',
                            }}}>
                        Get Started
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
            {/* Desktop Pricing Cards */}
            <div className={cx(classes.hiddenMobileMedium)} style={{height: '400px', width: '100%', paddingTop: 60}}>
                <Group position="center" spacing="xl" style={{height: '400px', width: '100%'}}>
                    <Card radius={'md'} sx={{border: '1px solid #EBEBEB','&:hover':{
                        border: '1px solid black',
                        }}}>
                        <Card.Section sx={{height: 90, width: 225, border: '1px solid #EBEBEB', padding: 20}}>
                            <div style={{height: '100%', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                <Text sx={{fontFamily:'visuelt-medium', fontSize:'22px', fontWeight: 600}}>
                                    Explore
                                </Text>
                                <Text sx={{fontFamily:'visuelt-regular', fontSize:'14px', color: '#858585', fontWeight: 500}}>
                                    Free Forever
                                </Text>
                            </div>
                        </Card.Section>
                        <Card.Section sx={{height: 300, width: 225, border: '1px solid #EBEBEB', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start', marginLeft: -20, padding: 20}}>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon}/>
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        1 user
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited APIs
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Partnerships
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Basic Support
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20, opacity:'50%'}}>
                                        <Image src={closeIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.unsupportedPricingListItem)}>
                                        No Workflows
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20, opacity:'50%'}}>
                                        <Image src={closeIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.unsupportedPricingListItem)}>
                                        No Invocations
                                    </Text>
                                </div>
                            </div>
                            <div style={{height:'100px'}}/>
                            <div style={{display:'flex', flexDirection:'row', paddingBottom: 10}}>
                                <Button radius="md" sx={{ border: '1px solid black', width: 194, height: 44,  fontFamily: 'visuelt-regular',fontSize: '16px',fontWeight: 400, backgroundColor: 'white', borderRadius: 10,color: 'black',
                                    '&:hover': {
                                            backgroundColor: '#B4F481',
                                            color: 'black',
                                            border: '0px'
                                        }}}>
                                    Get Started
                                </Button>
                            </div>
                        </Card.Section>
                    </Card>
                    <Card radius={'md'} sx={{border: '1px solid #EBEBEB','&:hover':{
                        border: '1px solid black',
                    }}}>
                        <Card.Section sx={{height: 90, width: 225, border: '1px solid #EBEBEB', padding: 20}}>
                            <div style={{height: '100%', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                <Text sx={{fontFamily:'visuelt-medium', fontSize:'22px', fontWeight: 600}}>
                                    Scope
                                </Text>
                                <Text sx={{fontFamily:'visuelt-regular', color: '#858585', fontSize:'14px', fontWeight: 500}}>
                                    $80 / user
                                </Text>
                            </div>
                        </Card.Section>
                        <Card.Section sx={{height: 300, width: 225, border: '1px solid #EBEBEB', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start', padding: 20}}>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>                                
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon}/>
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Users
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited APIs
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Partnerships
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Workflows
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Email Support
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20, opacity:'50%'}}>
                                        <Image src={closeIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.unsupportedPricingListItem)}>
                                        No Invocations
                                    </Text>
                                </div>
                            </div>
                            <div style={{height:'100px'}}/>
                            <div style={{display:'flex', flexDirection:'row', paddingBottom: 10}}>
                            <Button radius="md" sx={{ border: '1px solid black', width: 194, height: 44,  fontFamily: 'visuelt-regular',fontSize: '16px',fontWeight: 400, backgroundColor: 'white', borderRadius: 10,color: 'black',
                                    '&:hover': {
                                            backgroundColor: '#B4F481',
                                            color: 'black',
                                            border: '0px'
                                        }}}>
                                    Get Started
                                </Button>
                            </div>
                        </Card.Section>
                    </Card>
                    <Card radius={'md'} sx={{border: '1px solid #EBEBEB', opacity: '50%'}}>
                        <Card.Section sx={{height: 90, width: 225, border: '1px solid #EBEBEB', padding: 20}}>
                            <div style={{height: '100%', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                <Text sx={{fontFamily:'visuelt-medium', fontSize:'22px', fontWeight: 600}}>
                                    Validate
                                </Text>
                                <Text sx={{fontFamily:'visuelt-regular', color: '#858585', fontSize:'14px', fontWeight: 500}}>
                                    Coming Soon
                                </Text>
                            </div>
                        </Card.Section>
                        <Card.Section sx={{height: 300, width: 225, border: '1px solid #EBEBEB', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start', marginLeft: -20, padding: 20}}>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon}/>
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Users
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited APIs
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Partnerships
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Workflows
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Premium Support
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        One-off Invocations
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20, opacity: '50%'}}>
                                        <Image src={closeIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.unsupportedPricingListItem)}>
                                        Custom Invocations
                                    </Text>
                                </div>
                            </div>
                            <div style={{height:'100px'}}/>
                            <div style={{display:'flex', flexDirection:'row', paddingBottom: 10}}>
                                <Button disabled={true} radius="md" sx={{ border: '1px solid black', width: 194, height: 44,  fontFamily: 'visuelt-regular',fontSize: '16px',fontWeight: 400, backgroundColor: 'white', borderRadius: 10,color: 'black',
                                    '&:hover': {
                                            backgroundColor: '#3E3E3E',
                                            color: 'white',
                                        }}}>
                                    Coming Soon
                                </Button>
                            </div>
                        </Card.Section>
                    </Card>
                    <Card radius={'md'} sx={{border: '1px solid #EBEBEB', opacity: '50%'}}>
                        <Card.Section sx={{height: 90, width: 225, border: '1px solid #EBEBEB', padding: 20}}>
                            <div style={{height: '100%', width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                <Text sx={{fontFamily:'visuelt-medium', fontSize:'22px', fontWeight: 600}}>
                                    Deploy
                                </Text>
                                <Text sx={{fontFamily:'visuelt-regular', color: '#858585', fontSize:'14px', fontWeight: 500}}>
                                    Coming Soon
                                </Text>
                            </div>
                        </Card.Section>
                        <Card.Section sx={{height: 300, width: 225, border: '1px solid #EBEBEB', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start', marginLeft: -20, padding: 20}}>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon}/>
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Users
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited APIs
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Partnerships
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Unlimited Workflows
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Premium Support
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        One-off Invocations
                                    </Text>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', paddingBottom: 5}}>
                                    <div style={{height: 20, width: 20}}>
                                        <Image src={checkIcon} />
                                    </div>
                                    <div style={{width: 5}}/>
                                    <Text className={cx(classes.supportedPricingListItem)}>
                                        Custom Invocations
                                    </Text>
                                </div>
                            </div>
                            <div style={{height:'100px'}}/>
                            <div style={{display:'flex', flexDirection:'row', paddingBottom: 10}}>
                                <Button disabled={true} radius="md" sx={{ border: '1px solid black', width: 194, height: 44,  fontFamily: 'visuelt-regular',fontSize: '16px',fontWeight: 400, backgroundColor: 'white', borderRadius: 10,color: 'black',
                                    '&:hover': {
                                            backgroundColor: '#3E3E3E',
                                            color: 'white',
                                        }}}>
                                    Coming Soon
                                </Button>
                            </div>
                        </Card.Section>
                    </Card>
                </Group>
            </div>

            {/* Mobile Pricing Carousel */}
            <div className={cx(classes.hiddenDesktop)} style={{height: '400px', width: '100%', paddingTop: 60, flexDirection: 'column', alignItems: 'center'}}>
                <Text sx={{fontSize: '36px',fontFamily: 'vulf-sans-bold', paddingBottom: 25}}>
                    Our Plans
                </Text>
                <Carousel  withIndicators slideGap="xs" withControls={false} slideSize={'80%'} align='center' sx={{width: '100%'}}onSlideChange={(index) => { setActivePricingCard(pricingData[index].id) }}>
                    {
                        pricingData.map((item) => {
                            return(
                                <Carousel.Slide key={item.id}>
                                    {
                                        renderPricingCard(item)
                                    }
                                </Carousel.Slide>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className={cx(classes.hiddenMobileMedium)} style={{height: '400px', width: '100%', paddingTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text sx={{fontSize: '36px',fontFamily: 'vulf-sans-bold', paddingBottom: 25}}>
                    Feature Breakdown
                </Text>
            </div>
            <div className={cx(classes.hiddenMobileMedium)} style={{height: '400px', width: '100%', paddingTop: 60, paddingBottom: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '80%'}}>
                    <Image src={desktopFeatureBreakdown}/>
                </div>
            </div>
            <div style={{height: 200}}/>
        </div>
    )
}

export default Pricing
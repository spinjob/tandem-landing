import {
    Group,
    Text,
    Image,
    Anchor,
    createStyles,
    Badge
  } from '@mantine/core';

  import primaryLockupBlack from '../../public/logos/SVG/Primary Lockup_Black.svg'

  const useStyles = createStyles((theme) => ({
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

const Footer = () => {
    const { classes, cx, theme } = useStyles();
    return (
        <div style={{width: '100vw', maxWidth: '100%'}}>
            {/* Desktop Footer */}
            <div className={cx(classes.hiddenMobileMedium)} style={{height: '100px', width: '100%', backgroundColor:'#B5B6FF', flexDirection:'row', justifyContent:'space-between', borderTopRightRadius: 90, borderTopLeftRadius: 90}}>
                <Group sx={{paddingLeft: 70}}>
                    <Image src={primaryLockupBlack} alt="Primary Lockup Black" width={150}/>
                </Group>
                <Group sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px', paddingRight: 70}}>
                        © 2023 InTandem Technologies Inc. All Rights Reserved.
                    </Text>
                    <Anchor href='/privacy' sx={{fontFamily:'visuelt-regular', fontSize: '12px', paddingRight: 70}}>
                        Privacy Policy
                    </Anchor>
                </Group>
            </div>
            {/* Mobile Footer */} 
            <div className={cx(classes.hiddenDesktop)} style={{height: '80px', width: '100%', backgroundColor:'#B5B6FF', alignItems: 'center', flexDirection:'column', justifyContent:'center', borderTopRightRadius: 50, borderTopLeftRadius: 50}}>
                    <Image src={primaryLockupBlack} alt="Primary Lockup Black" width={100}/>
                    <div style={{height: '10px'}} />
                    <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px'}}>
                        © 2023 InTandem Technologies Inc. All Rights Reserved.
                    </Text>
                    <Text sx={{fontFamily:'visuelt-regular', fontSize: '12px', paddingRight: 70}}>
                            Privacy Policy
                    </Text>
            </div>
        </div>
     )
}

export default Footer
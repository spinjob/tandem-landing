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
  import { useRouter } from 'next/router';
  import axios from 'axios';
  
  const HEADER_HEIGHT = 80;
  const useStyles = createStyles((theme) => ({
    inner: {
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header: {
        fontFamily: 'Vulf Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        [theme.fn.smallerThan('sm')]: {
          backgroundColor: '#F8F6F3'
    }},
    links: {
      padding: 40,
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    hiddenMobileMenu:{ 
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
      backgroundColor:'#F8F6F3',
      '.mantine-Drawer-header':{
        backgroundColor:'#F8F6F3',
      }
    }
  },
  }));
  
function HeaderAction() {
    const { classes, theme } = useStyles();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const router = useRouter();

    return (
      <Header className={classes.header} height={HEADER_HEIGHT} sx={{  position:'fixed'}} >
        <div className={classes.inner} style={{ display:'flex'}}>
          <Group
            className={classes.links}>
            {/* <Anchor href={'/pricing'}>
              <Text sx={{
                  fontFamily: 'Visuelt',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#000000',
                  marginRight: 20
              }}>
                  PRICING
              </Text>
            </Anchor> */}
            <Anchor href={'/solutions'}>
              <Text sx={{
                  fontFamily: 'Visuelt',
                  fontWeight: 100,
                  fontSize: 16,
                  color: '#000000',
                  marginRight: 20,
              }}>
                  ALPHA SOLUTIONS
              </Text>
            </Anchor>
          </Group>
          <Group 
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              
          }}
          spacing={5} >
            <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: 200,

            }}
            >
              <Image src={primaryLockupBlack} onClick={()=>{
                router.push('/')
              }} alt="Logo" sx={{cursor:'pointer'}} />
            </Container>
          </Group>
          <Group
           className={classes.links}>
            {/* <Anchor
              href={process.env.NEXT_PUBLIC_APP_BASE_URL + '/api/auth/login'}
            >
              <Text sx={{
                  fontFamily: 'Visuelt',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#000000',
                  marginRight: 20,
              }}>
                  SIGN IN
              </Text>
            </Anchor> */}
            <Button onClick={()=>{
				router.push("https://calendly.com/spencer-tandem/tandem-demo")
			}}  radius={'sm'} sx={{ 
              height: 34,
              width: 150,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              fontFamily: 'Visuelt',
              fontWeight: 500,
              '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: '1px solid #000000'
              }

            }}>
              CHAT WITH US
            </Button>
          </Group>
          <Group
            className={classes.burger}
            sx={{
              padding: 20
            }}
          >
            <Burger opened={drawerOpened} onClick={toggleDrawer}  />
          </Group>
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            zIndex={1000000}
            className={classes.hiddenMobileMenu}
            color="#F8F6F3"
            title={
              <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 200,
                    marginLeft: 10
                }}
              >
              <Image src={primaryLockupBlack} alt="Logo" />
            </Container>
            }
            styles={{
              header: {
                backgroundColor: '#F8F6F3',
                height: 80,
                margin:0
              },
          

            }}

          >
            <Divider />
            <div
              style={{
                height: '100vh',
                backgroundColor: '#F8F6F3',
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 30,
                paddingTop: 30,
                paddingBottom: 30,
                paddingRight: 30
              }}
            >
                {/* <NavLink
                  sx={{
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    borderRadius: 20,
                    height: 70,
                  }}
                  onClick={()=> {
                    router.push(process.env.NEXT_PUBLIC_APP_BASE_URL + '/api/auth/login')
                  }}
                  href={process.env.NEXT_PUBLIC_APP_BASE_URL + '/api/auth/login'}
                  label={
                    <Text sx={{
                      fontFamily: 'Visuelt',
                      fontWeight: 500,
                      fontSize: 28,
                      color: '#000000',
                     
                  }}>
                      Sign Up
                  </Text>
                  }
                />   */}
                <div style={{height: 10}}/>
                {/* <NavLink
                  sx={{
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    borderRadius: 20,
                    height: 70,
                  }}
                  onClick={()=> {
                    router.push('/pricing')
                  }}
                  label={
                    <Text sx={{
                      fontFamily: 'Visuelt',
                      fontWeight: 500,
                      fontSize: 28,
                      color: '#000000',
                     
                  }}>
                      Pricing
                  </Text>
                  }
                />   */}
                <div style={{height: 10}}/>
                <NavLink
                  sx={{
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    borderRadius: 20,
                    height: 70,
                  }}
                  onClick={()=> {
                    router.push('/solutions')
                  }}
                  label={
                    <Text sx={{
                      fontFamily: 'Visuelt',
                      fontWeight: 500,
                      fontSize: 28,
                      color: '#000000',
                     
                  }}>
                      Alpha Solutions
                  </Text>
                  }
                />  
                {/* <div style={{height: 10}}/>
                <NavLink
                  sx={{
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    borderRadius: 20,
                    height: 70,
                  }}
                  label={
                    <Text sx={{
                      fontFamily: 'Visuelt',
                      fontWeight: 500,
                      fontSize: 28,
                      color: '#000000',
                     
                  }}>
                      About
                  </Text>
                  }
                />   */}
            </div>
           
          </Drawer>
        </div>
      </Header>
    );
  }

export default HeaderAction;
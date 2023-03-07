import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Text,
    Image,
    Anchor
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import primaryLockupBlack from '../../public/logos/SVG/Primary Lockup_Black.svg'
  
  const HEADER_HEIGHT = 60;
  
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
    }
  }));
  
function HeaderAction({ links }) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
      const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      ));
  
      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
            <Menu.Target>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown>{menuItems}</Menu.Dropdown>
          </Menu>
        );
      }
  
      return (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      );
    });
  
    return (
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} >
        <div className={classes.inner} style={{padding: 40}} fluid>
          <Group>
            <Anchor>
              <Text sx={{
                  fontFamily: 'Visuelt',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#000000',
                  marginRight: 20,
              }}>
                  PRICING
              </Text>
            </Anchor>
            <Anchor>
              <Text sx={{
                  fontFamily: 'Visuelt',
                  fontWeight: 100,
                  fontSize: 16,
                  color: '#000000',
                  marginRight: 20,
              }}>
                  ABOUT
              </Text>
            </Anchor>
          </Group>
          <Group spacing={5} className={classes.links}>
            <Container
            sx={{
                width: 200
            }}
            >
              <Image src={primaryLockupBlack} alt="Logo" />
            </Container>
          </Group>
          <Group>
          <Anchor>
            <Text sx={{
                fontFamily: 'Visuelt',
                fontWeight: 500,
                fontSize: 16,
                color: '#000000',
                marginRight: 20,
            }}>
                SIGN IN
            </Text>
          </Anchor>
          <Button radius={'sm'} sx={{ 
            height: 34,
            width: 120,
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
            Get Started
          </Button>
          </Group>
          
        </div>
      </Header>
    );
  }

export default HeaderAction;
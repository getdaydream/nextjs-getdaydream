import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { useGlobalStore, OverlayEnum } from '@store/global';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { Button, KIND } from 'baseui/button';
import { Theme } from 'baseui/theme';

const DynamicLoginModal = dynamic(() => import('../LoginModal'), {
  ssr: false,
});

const Header: React.SFC = () => {
  const global = useGlobalStore();

  return (
    <Fragment>
      <HeaderNavigation
        overrides={{
          Root: {
            style: (props: { $theme: Theme }) => ({
              paddingLeft: props.$theme.sizing.scale800,
              paddingRight: props.$theme.sizing.scale800,
              paddingTop: props.$theme.sizing.scale600,
              paddingBottom: props.$theme.sizing.scale600,
            }),
          },
        }}
      >
        <StyledNavigationList $align={ALIGN.left}></StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center}></StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Button
              onClick={() => global.setCurrentOverlay(OverlayEnum.LoginModal)}
            >
              登录
            </Button>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Button
              kind={KIND.secondary}
              onClick={() => global.setCurrentOverlay(OverlayEnum.LoginModal)}
            >
              加入
            </Button>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
      <DynamicLoginModal></DynamicLoginModal>
    </Fragment>
  );
};

export default Header;

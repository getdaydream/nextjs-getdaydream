import { useGlobalStore, OverlayEnum } from '../../store/global';
import { observer } from 'mobx-react';
import { useState, useRef } from 'react';
import { Modal, ModalBody, ModalHeader } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';
import { Theme } from 'baseui/theme';
import { Tabs, Tab } from 'baseui/tabs';

enum TabEnum {
  Login = 'login',
  Signup = 'Signup',
}

const LoginModal: React.SFC = () => {
  const global = useGlobalStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeKey, setActiveKey] = useState(TabEnum.Login);

  const handleClick = () => {
    if (activeKey === TabEnum.Login) {
      global.login(email, password);
    } else {
      global.signup(email, password);
    }
  };

  return (
    <Modal
      isOpen={global.currentOverlay === OverlayEnum.LoginModal}
      onClose={() => global.setCurrentOverlay(null)}
    >
      <ModalHeader>
        <Tabs
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey as TabEnum)}
        >
          <Tab key={TabEnum.Login} title="登录"></Tab>
          <Tab key={TabEnum.Signup} title="注册"></Tab>
        </Tabs>
      </ModalHeader>
      <ModalBody>
        <Input
          placeholder="邮箱"
          overrides={{
            Root: {
              style: (props: { $theme: Theme }) => ({
                marginTop: props.$theme.sizing.scale1000,
                marginBottom: props.$theme.sizing.scale600,
              }),
            },
          }}
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        ></Input>
        <Input
          type="password"
          placeholder="密码"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></Input>
        <Block display="flex" justifyContent="center" marginTop="16px">
          <Button
            overrides={{ BaseButton: { style: { width: '100%' } } }}
            onClick={handleClick}
          >
            {activeKey === TabEnum.Login ? '登录' : '注册'}
          </Button>
        </Block>
      </ModalBody>
    </Modal>
  );
};

export default observer(LoginModal);

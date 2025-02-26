import { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Flex, Form, Input, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login, sendEmail, regist, createResetLink } from '@/api/user';
import storage from '@/utils/storage';
import { usePageStore } from '@/stores/pageStore';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.module.less';
import { message } from '@/utils/AntdGlobal';
type FieldType = {
  userName: string;
  code?: number;
  userPwd: string;
};
export default function Login() {
  const [type, setType] = useState('login');
  const [count, setCount] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const saveUserInfo = usePageStore((state) => state.saveUserInfo);

  // 类型切换
  const onChange = (val?: string) => {
    setStatus(false);
    if (val) {
      setType(val);
    } else {
      setType(type == 'login' ? 'regist' : 'login');
    }
    form.setFieldsValue({
      userName: '',
      userPwd: '',
    });
  };

  // 生成验证码
  const handleCreateCode = () => {
    form.validateFields(['userName']).then(async ({ userName }) => {
      setLoading1(true);
      try {
        await sendEmail({ email: userName });
        setCount(60);
        setLoading1(false);
      } catch (error) {
        setLoading1(false);
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    // 清理函数
    return () => clearTimeout(timer);
  }, [count]);

  // 登录/注册/密码重置
  const onFinish: FormProps<FieldType>['onFinish'] = async (values: FieldType) => {
    setLoading2(true);
    try {
      if (type === 'reset') {
        await createResetLink({ userEmail: values.userName });
        message.success('请查收重置邮件');
        setStatus(true);
        setLoading2(false);
      } else {
        const res = type === 'login' ? await login<FieldType>(values) : await regist(values);
        debugger
        setLoading2(false);
        if (res.token) {
          storage.set('token', res.token);
          saveUserInfo(res);
          if (location.search) {
            const params = new URLSearchParams(location.search);
            setTimeout(() => {
              const url = new URL(params.get('callback') as string);
              navigate(url.pathname || '/projects');
            });
          } else {
            navigate('/projects');
          }
        }
      }
    } catch (error) {
      setLoading2(false);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.left}>
          <img src="/imgs/login-bg.png" />
        </div>
        <div className={style.form}>
          {type === 'login' ? (
            <div className={style.title}>
              <img src="/imgs/x-lowcode-logo.svg" width={45} />
              <span>登录</span>
            </div>
          ) : (
            <div className={style.title}>{type === 'regist' ? '邮箱注册' : '密码找回'}</div>
          )}
          <Form name="basic" layout="vertical" className={style.form} onFinish={onFinish} size="large" form={form}>
            <Form.Item<FieldType>
              name="userName"
              rules={[
                { required: true, message: '请输入邮箱' },
                { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="请输入个人邮箱" autoComplete="off" allowClear />
            </Form.Item>

            {type === 'regist' && (
              <Form.Item>
                <Flex gap={20}>
                  <Form.Item<FieldType> name="code" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                    <InputNumber prefix={<SafetyOutlined />} style={{ width: '100%' }} placeholder="验证码" />
                  </Form.Item>
                  <Button type="primary" onClick={handleCreateCode} disabled={count > 0} loading={loading1}>
                    {count > 0 ? count + 's' : '获取验证码'}
                  </Button>
                </Flex>
              </Form.Item>
            )}

            {type !== 'reset' && (
              <Form.Item<FieldType> style={{ marginTop: 32 }} name="userPwd" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password prefix={<LockOutlined />} autoComplete="off" allowClear placeholder="请输入密码" />
              </Form.Item>
            )}

            <Form.Item style={{ marginTop: 40 }}>
              <Button type="primary" block htmlType="submit" loading={loading2} disabled={status}>
                {type === 'login' ? '登录' : type === 'regist' ? '注册' : '发送重置邮件'}
              </Button>
            </Form.Item>
            <Form.Item style={{ marginTop: 40 }}>
              <Flex justify="space-between" gap={20}>
                <a onClick={() => onChange()}>{type === 'login' ? '没有账号？去注册' : '已有账号？去登录'}</a>
                {type !== 'reset' ? <a onClick={() => onChange('reset')}>忘记密码</a> : <a onClick={() => onChange('regist')}>没有账号？去注册</a>}
              </Flex>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

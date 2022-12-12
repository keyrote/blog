import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
// import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className="bg-green-200" style={{ height: '40px' }}>
        1
      </div>
    </PageContainer>
  );
};

export default HomePage;

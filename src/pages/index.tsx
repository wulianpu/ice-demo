import logo from '@/assets/logo.png';
import styles from './index.module.css';
import { Button } from 'antd';

export default function Home() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Hello ice.js 3
        </p>
      </header>
      <main>
        <Button type="primary">Button</Button>
      </main>
    </div>
  );
}

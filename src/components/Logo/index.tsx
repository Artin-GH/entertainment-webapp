import styles from './Logo.module.css';
import LogoIcon from 'public/logo.svg';

export default function Logo(props: { className?: string }) {
  return <LogoIcon className={`${styles.logo} ${props.className ?? ""}`} />;
}

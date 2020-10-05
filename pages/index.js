import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map.js'), {
    ssr: false
});

export default DynamicComponentWithNoSSR;

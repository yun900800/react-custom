import React from 'react';
import DynamicInputWidth from './dynamic-input';
import styles from './style-app.module.css';
import HoverButton from './HoverButton';
import DynamicCard from './DynamicCard';
import ResponsiveLayout from './ResponsiveLayout';
import ContainerResponsiveLayout from './ContainerResponsiveLayout';
import AutosizeInput from 'react-input-autosize';
const StyleApp = () =>{
    const [value, setValue] = React.useState('');
    return (
        <div className={styles.main}>
            <DynamicInputWidth/>
            <HoverButton/>
            <DynamicCard/>
            <ResponsiveLayout/>
            <ContainerResponsiveLayout/>
            <AutosizeInput
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="请输入内容"
                name = "searchField"
            />
        </div>
    )
}

export default StyleApp;
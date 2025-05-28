// components/AnimatedContent.js (将原始组件与HOC结合)
import withFadeInAnimation from './withFadeInAnimation';
import MyContentComponent from './MyContentComponent';

// 使用HOC包裹MyContentComponent
const AnimatedContent = withFadeInAnimation(MyContentComponent);

export default AnimatedContent;
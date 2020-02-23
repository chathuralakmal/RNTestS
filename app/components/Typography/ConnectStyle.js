import React from 'react';
import Styles from './Styles';

const translateProps = (props, componentDisplayName) => {
    const { weight, align, style } = props;
    let changeStyleOnFly = {
        ...style,
        fontWeight: weight ? weight === 'light' ? '300' : weight : 'normal',
        textAlign: align ? align : 'left'
    };

    switch (componentDisplayName) {
        case 'heading':
            return { ...props, style: [Styles.heading, changeStyleOnFly] };
        case 'title':
            return { ...props, style: [Styles.title, changeStyleOnFly] };
        case 'subtitle':
            return { ...props, style: [Styles.subtitle, changeStyleOnFly] };
        case 'caption':
            return { ...props, style: [Styles.caption, changeStyleOnFly] };
        case 'text':
            return { ...props, style: [Styles.text, changeStyleOnFly] };
        case 'link':
            return { ...props, style: [Styles.link, changeStyleOnFly] }; 
        case 'largerHeading':
            return { ...props, style: [Styles.largerHeading, changeStyleOnFly] };  
        case 'largeMediumHeading':
            return { ...props, style: [Styles.largeMediumHeading, changeStyleOnFly] };  
        default:
            return props;
    }
};


export default (componentStyleName, componentStyle = {}, mapPropsToStyleNames, options = {}) => {

    return function wrapWithStyledComponent(WrappedComponent) {
        return function wrappedRender(args) {
            return <WrappedComponent {...translateProps(args, componentStyleName)} />;
        };
    };
};


import { createStackNavigator } from 'react-navigation-stack';

import { OnboardingScreen, LoginScreen, SignUpScreen } from '../screens';

const Unauthenticated = createStackNavigator({
    Onboarding: {
        screen: OnboardingScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'login'
        }
    },
    SignUp:{
        screen: SignUpScreen,
        navigationOptions: {
            title: 'Cadastro'
        }
    }
},{
    initialRouteName:'Onboarding'
});

export default Unauthenticated;
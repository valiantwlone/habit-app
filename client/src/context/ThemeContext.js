import React, {createContext, Component, useState, useReducer, useEffect} from "react";

export const ThemeContext = createContext();



class ThemeContextProvider extends Component{
    
    state={
        isLightTheme :  true ,
        light:{ mode: 'light',syntax : '#555', ui:'#ddd', bg: '#eee'},
        dark:{mode :'dark',syntax : 'white', ui:'#333', bg: '#555'},

    }

    changeTheme=()=> {

        this.setState({
            isLightTheme : !this.state.isLightTheme
        })






  
    }



    render(){
        return(
            <ThemeContext.Provider value={{...this.state, changeTheme :this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider 





// const originalState ={isLightTheme : true,
    //                     light:{ mode: 'light',syntax : '#555', ui:'#ddd', bg: '#eee'}
    //                         }
    // function themeReducer(state, action){
    //     switch(action.type){
    //         case 'LIGHT': {
    //         return {isLightTheme : true,
    //                 light:{ mode: 'light',syntax : '#555', ui:'#ddd', bg: '#eee'}
    //             }
    //         }
    //         case 'DARK' : {
    //             return {isLightTheme : false,
    //                 light:{ mode: 'dark',syntax : '#ddd', ui:'#333', bg: '#555'}
    //             }
    //         }
    //         default : {
    //         return {isLightTheme : true,
    //             light:{ mode: 'light',syntax : '#555', ui:'#ddd', bg: '#eee'}
    //             }           
    //         }
    //     }
    // }
    
    // function ThemeContextProvider ({children}){
    //     const [state, dispatch] = React.useReducer(themeReducer, originalState)
    
    //     return(
    //                     <ThemeContext.Provider value={{state, dispatch}}>
    //                         {children}
    //                     </ThemeContext.Provider>
    //                 );
    // }
    // function useThemeContext() {
    //     const context = React.useContext(ThemeContext)
    //     if (context === undefined) {
    //       throw new Error('useTheme must be used within a themeProvider')
    //     }
    //     return context
    //   }
      
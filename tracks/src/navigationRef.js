import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    console.log("setting nav", nav.dispatch);
    navigator = nav;
};

export const navigate = (routeName, params) => {

    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
};

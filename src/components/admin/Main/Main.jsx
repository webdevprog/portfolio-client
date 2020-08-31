import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import myDataProvider from './DataProvider';
import { PostList, PostEdit, PostCreate, PostIcon } from '../Posts/Posts';



const Main = (props) => {
    return (
        <Admin dataProvider={myDataProvider}>
            <Resource name="project" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        </Admin>
    );
}

export default Main;
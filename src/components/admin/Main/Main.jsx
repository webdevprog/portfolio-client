import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from '../Posts/Posts';

const Main = (props) => {

    return (
        <Admin dataProvider={simpleRestProvider('http://localhost:5000/api')}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        </Admin>
    );
}

export default Main;
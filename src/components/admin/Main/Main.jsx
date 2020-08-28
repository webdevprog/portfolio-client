import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from '../Posts/Posts';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:5000/api/admin', httpClient);

const Main = (props) => {

    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="project" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        </Admin>
    );
}

export default Main;
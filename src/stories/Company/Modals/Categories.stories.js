import React from 'react';
import {storiesOf} from '@storybook/react';
import {
    Categories,
} from '../../../lib';
import {CategoriesForm} from "../../../../dist";


const categories = {"data":[
    {"id":1,"title":"Møbler & interiør","parent_id":0,"order":1,"icon":532,"created_at":"2019-04-12T09:52:56.850Z","updated_at":"2019-04-12T09:52:56.850Z","deleted_at":null,
                "file_store":
                {"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},
    
    {"id":2,"title":"Hus & hage","parent_id":0,"order":2,"icon":532,"created_at":"2019-04-29T10:20:54.145Z","updated_at":"2019-04-29T10:20:54.145Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":3,"title":"Elektronikk","parent_id":0,"order":3,"icon":532,"created_at":"2019-04-29T10:20:54.000Z","updated_at":"2019-04-29T10:20:54.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},
    {"id":4,"title":"Category with subs","parent_id":0,"order":4,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[{"id":5,"title":"Kvinne","parent_id":4,"order":5,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[{"id":6,"title":"Test","parent_id":5,"order":6,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":7,"title":"Test 1","parent_id":5,"order":7,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":8,"title":"Test 2","parent_id":5,"order":8,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":22,"title":"Test 3","parent_id":5,"order":19,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0}],"height":1},{"id":9,"title":"Mann","parent_id":4,"order":9,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":10,"title":"Jente","parent_id":4,"order":10,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[{"id":11,"title":"Baby (str. 50-92)","parent_id":10,"order":11,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[{"id":12,"title":"Ali a pe she","parent_id":11,"order":12,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0}],"height":1},{"id":13,"title":"Barn (str. 98-140)","parent_id":10,"order":13,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":14,"title":"Ungdom (str. 146-176)","parent_id":10,"order":14,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0}],"height":2},{"id":16,"title":"Gutt","parent_id":4,"order":15,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0}],"height":4},{"id":17,"title":"Category with subs 3","parent_id":0,"order":16,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[{"id":20,"title":"Kvinne -","parent_id":17,"order":17,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0},{"id":21,"title":"Mann - ","parent_id":17,"order":18,"icon":532,"created_at":"2019-04-12T09:52:56.000Z","updated_at":"2019-04-12T09:52:56.000Z","deleted_at":null,"file_store":{"blob_url":"https://tipio.ams3.digitaloceanspaces.com/dev/test/test/icon.svg"},"sub_categories":[],"height":0}],"height":1}],"status":200};

const initialState = {
    categories,
    active: categories.data,
    loading: false,
    navigation: [],
    withCheckbox: true,
    selectedMap: {},
    controlDisabledButton: true,
    setActiveCategory: setActiveCategory,
    goBack: goBack
};

function setActiveCategory() {
    console.log(this)
    // path = [];
    // const t = findCategory(state.allCategories, action.data.category_id);
    // return { ...state, active: t.sub_categories, navigation: path, loading: false };
}

function goBack() {
    // return { ...state, active: state.allCategories, navigation: [] };
    console.log(this)
}

storiesOf('Company/Components/Modals', module)
    .add('Choose Category', () =>
        <>
            <div className="col-3 m-3">
                <Categories
                    {...initialState}
                    setActiveCategory={()=>{initialState.setActiveCategory()}}
                    goBack={()=>{initialState.goBack()}}
                />
            </div>
        </>
    )

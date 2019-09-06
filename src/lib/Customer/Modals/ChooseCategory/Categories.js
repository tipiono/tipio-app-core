import React, {useState, useEffect} from 'react';
import {Modal, ModalType} from '../../../UI/Modal/Modal'
import Masonry from "react-masonry-css";
import CategoryItem from "./CategoryItem";
import CategoryItemNavigator from "./CategoryItemNavigator";
import CategoryItemWithDropdown from "./CategoryItemWithDropdown";
import CategoriesHeader from "./CategoriesHeader";

const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 2
};

function Categories({ active, navigation }) {
    const [selectedOptionId, setSelectedOptionId] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);

    function optionOnSelect(item) {
        let soi = 0;
        if (selectedOptionId !== item.id) {
            soi = item.id;
        }
        setSelectedOptionId(soi);
        setSelectedOption(soi === 0 ? null : item);
        setSelectedCategoryId(0);
    }

    function categoryWithDropdownOnSelect(item) {
        let sci = 0;
        if (selectedCategoryId !== item.id) {
            sci = item.id;
        }
        setSelectedCategoryId(sci);
        setSelectedOptionId(0);
        setSelectedOption(sci === 0 ? null : item);
    }

    function chooseCategoryOnClick() {
        // onComplete(selectedOptionId, selectedOption);
    }

    function navigatorOnSelect(id) {
        setSelectedCategoryId(0);
        setSelectedOptionId(0);
        setSelectedOption(null);
        // setActiveCategory(id);
    }

    function subCategoriesOnClick(item) {
        if (item.height === 1) {
            // setActiveCategory(item.id);
        }
    }

    function backButtonOnClick() {
        // goBack();
    }

    return (
        <Modal type={ModalType.XLARGE} onCloseButtonClick={chooseCategoryOnClick} appendCenteredClass={false}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="choose-category">
                            <CategoriesHeader data={navigation} backButtonOnClick={backButtonOnClick}/>
                            <div className="choose-category-body">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid browse-categories"
                                    columnClassName="my-masonry-grid_column main-categories"
                                >
                                    {active && active.map((item) => {
                                        if (item.height === 1) {
                                            return <CategoryItemNavigator item={item} onClick={(e) => {navigatorOnSelect(item.id)}} />
                                        } else if (item.height > 1) { // height > 1
                                            return <CategoryItemWithDropdown
                                                title={item.title}
                                                sub_categories={selectedCategoryId === item.id ? item.sub_categories : []}
                                                onClick={() => { categoryWithDropdownOnSelect(item); }}
                                                active={selectedCategoryId === item.id}
                                                subCategoriesOnClick={subCategoriesOnClick}
                                                icon={item.file_store && item.file_store.blob_url}
                                            />
                                        } else { // height 0
                                            return <CategoryItem
                                                icon={item.file_store && item.file_store.blob_url}
                                                title={item.title}
                                                onSelect={(e) => { e.preventDefault(); optionOnSelect(item); }}
                                                selected={item.id === selectedOptionId}
                                            />
                                        }
                                    })}
                                </Masonry>
                            </div>
                            <div className="choose-category-footer">
                                <button className="btn btn-lg btn-secondary w-50" disabled={!selectedOptionId} onClick={chooseCategoryOnClick}>Legg til kategori</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Categories;

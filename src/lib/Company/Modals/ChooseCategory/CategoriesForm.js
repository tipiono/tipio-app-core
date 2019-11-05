import React, {useState, useEffect} from 'react';
import Masonry from "react-masonry-css";
import CategoryItem from "./CategoryItem";
import CategoryItemNavigator from "./CategoryItemNavigator";
import CategoryItemWithDropdown from "./CategoryItemWithDropdown";
import CategoriesHeader from "./CategoriesHeader";
import cx from 'classnames';

import SecondaryButton from '../../../UI/Buttons/SecondaryButton';

const breakpointColumnsObj = {
    default: 2,
    1100: 1,
    700: 1,
    500: 1
};

function CategoriesForm({
                            active,
                            navigation,
                            buttonTitle,
                            withCheckbox,
                            onChange,
                            controlDisabledButton,
                            disabledButton,
                            selectedMap,
                            onComplete,
                            isLoading,
                            setActiveCategory,
                            goBack
                        }) {
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
        onComplete(selectedOptionId, selectedOption);
    }

    function navigatorOnSelect(id) {
        setSelectedCategoryId(id);
        setSelectedOptionId(0);
        setSelectedOption(null);
        setActiveCategory(id);
    }

    function subCategoriesOnClick(item) {
        if (item.height === 1) {
            setActiveCategory(item.id);
        }
    }

    function backButtonOnClick() {
        goBack();
    }

    return (

        <div className="choose-category">
            <CategoriesHeader data={navigation} backButtonOnClick={backButtonOnClick}/>
            <div className="choose-category-body">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid browse-categories"
                    columnClassName={cx("my-masonry-grid_column", {
                        "customer-main-categories": !withCheckbox,
                        "company-main-categories": withCheckbox
                    })}
                >
                    {active && active.map((item) => {
                        if (item.height === 1) {
                            return <CategoryItemNavigator
                                item={item}
                                onClick={(e) => {
                                    navigatorOnSelect(item.id)
                                }}
                                withCheckbox={withCheckbox}
                                onChange={onChange}
                                selectedMap={selectedMap}
                            />
                        } else if (item.height > 1) { // height > 1
                            return <CategoryItemWithDropdown
                                id={item.id}
                                title={item.title}
                                sub_categories={selectedCategoryId === item.id ? item.sub_categories : []}
                                onClick={() => {
                                    categoryWithDropdownOnSelect(item);
                                }}
                                active={selectedCategoryId === item.id}
                                subCategoriesOnClick={subCategoriesOnClick}
                                icon={item.file_store && item.file_store.blob_url}
                                withCheckbox={withCheckbox}
                                onChange={onChange}
                                selectedMap={selectedMap}
                            />
                        } else { // height 0
                            return <CategoryItem
                                id={item.id}
                                icon={item.file_store && item.file_store.blob_url}
                                title={item.title}
                                onSelect={(e) => {
                                    e.preventDefault();
                                    optionOnSelect(item);
                                }}
                                selected={item.id === selectedOptionId}
                                withCheckbox={withCheckbox}
                                onChange={onChange}
                                selectedMap={selectedMap}
                            />
                        }
                    })}
                </Masonry>
            </div>
            <div className="choose-category-footer">
                <SecondaryButton
                    className="choose-category-footer--btn btn btn-lg btn-secondary"
                    text={buttonTitle || 'Lagre'}
                    disabled={(controlDisabledButton && disabledButton) || (!controlDisabledButton && !selectedOptionId)}
                    onClick={chooseCategoryOnClick}
                    loading={isLoading}
                />
            </div>
        </div>
    );
}

export default CategoriesForm;

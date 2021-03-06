import React, { useState, useLayoutEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import CategoryItem from './CategoryItem';
import CategoryItemNavigator from './CategoryItemNavigator';
import CategoryItemWithDropdown from './CategoryItemWithDropdown';
import CategoriesHeader from './CategoriesHeader';
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
    parent,
    buttonTitle,
    withCheckbox,
    onChange,
    controlDisabledButton,
    disabledButton,
    selectedMap,
    onComplete,
    isLoading,
    setActiveCategory,
    goBack,
    path,
    isFilter,
    clearFilter,
    onClickSelect
}) {
    const [selectedOptionId, setSelectedOptionId] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [orderActive, setOrderActive] = useState([]);
    const ref = useRef(null);

    const sort = (arr) =>
        arr.sort((second, first) => {
            if ('sub_categories' in first) sort(first.sub_categories);
            if (first.order === undefined) return 1;
            return second.order > first.order ? 1 : -1;
        });

    const sorter = (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            if ('sub_categories' in arr[i]) sort(arr[i].sub_categories);
        }
        sort(arr);
        return arr;
    };

    useLayoutEffect(() => {
        const sortAktive = (arr) =>
            new Promise((resolve, reject) => {
                try {
                    sorter(arr);
                    resolve(true);
                } catch {
                    reject(true);
                }
            });
        sortAktive(active)
            .then((_) => setOrderActive(active))
            .catch((_) => setOrderActive(active));
    }, [active]);

    function optionOnSelect(item) {
        let soi = 0;
        if (selectedOptionId !== item.id) {
            soi = item.id;
        }
        setSelectedOptionId(soi);
        setSelectedOption(soi === 0 ? null : item);
        setSelectedCategoryId(0);
        if (onClickSelect) {
            onComplete(soi, selectedOption);
        }
    }

    function selectedSubCategory(item) {
        let soi = 0;
        if (selectedOptionId !== item.id) {
            soi = item.id;
        }
        setSelectedOptionId(soi);
        if (typeof item === 'object') {
            if (onClickSelect) {
                onComplete(soi);
            }
        }
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
        if (item.height >= 1 && item.height <= 3) {
            ref.current.scrollIntoView({ x: 0, y: 0, behavior: 'smooth' });
            setActiveCategory(item.id);
        }
    }

    function headerSubOnClick(item) {
        setSelectedCategoryId(item.id);
        setActiveCategory(item.id);
    }

    function backButtonOnClick() {
        goBack();
    }

    return (
        <div className="choose-category" ref={ref}>
            <CategoriesHeader
                data={navigation}
                parent={parent}
                backButtonOnClick={backButtonOnClick}
                subCategoriesOnClick={headerSubOnClick}
                path={path}
                clearFilter={!isLoading ? (_) => clearFilter() : (_) => {}}
                isFilter={isFilter}
            />
            <div className="choose-category-body">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid browse-categories"
                    columnClassName={cx('my-masonry-grid_column', {
                        'customer-main-categories': !withCheckbox,
                        'company-main-categories': withCheckbox
                    })}
                >
                    {orderActive.length &&
                        orderActive.map((item) => {
                            if (item.height === 1) {
                                return (
                                    <CategoryItemNavigator
                                        key={item.id + ':' + item.title}
                                        item={item}
                                        onClick={(e) => {
                                            navigatorOnSelect(item.id);
                                        }}
                                        withCheckbox={withCheckbox}
                                        onChange={onChange}
                                        selectedMap={selectedMap}
                                    />
                                );
                            } else if (item.height > 1) {
                                // height > 1
                                return (
                                    <CategoryItemWithDropdown
                                        key={item.id + ':' + item.title}
                                        id={item.id}
                                        title={item.title}
                                        sub_categories={selectedCategoryId === item.id ? item.sub_categories : []}
                                        onClick={() => {
                                            categoryWithDropdownOnSelect(item);
                                        }}
                                        onSelect={(selectedItem) => {
                                            selectedSubCategory(selectedItem);
                                        }}
                                        active={selectedCategoryId === item.id}
                                        subCategoriesOnClick={subCategoriesOnClick}
                                        icon={item.file_store && item.file_store.blob_url}
                                        withCheckbox={withCheckbox}
                                        onChange={onChange}
                                        selectedMap={selectedMap}
                                    />
                                );
                            } else {
                                // height 0
                                return (
                                    <CategoryItem
                                        key={item.id + ':' + item.title}
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
                                );
                            }
                        })}
                </Masonry>
            </div>
            {!onClickSelect && (
                <div className="choose-category-footer">
                    <SecondaryButton
                        className="choose-category-footer--btn btn btn-lg btn-secondary"
                        text={buttonTitle || 'Lagre'}
                        disabled={
                            (controlDisabledButton && disabledButton) || (!controlDisabledButton && !selectedOptionId)
                        }
                        onClick={chooseCategoryOnClick}
                        loading={isLoading}
                    />
                </div>
            )}
        </div>
    );
}

export default CategoriesForm;

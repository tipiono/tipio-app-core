import React, { useState } from 'react';
import Masonry from 'react-masonry-css'
import Image from './Image';
import initSelectedOrder from './utils/initSelectedOrder';
import Button from '../Buttons/SecondaryButton';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2
};

const imgCountClassName = {
    1: 'one',
    2: 'one-half',
    3: 'one-third'
};

function SelectImages({ images, title, ...props }) {

    const [selectedMax, setSelectedMax] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState(initSelectedOrder(images));

    const _onChange = (e) => {
        const { checked } = e.target;
        let currentOrder = selectedOrder[e.target.value];
        let sm = selectedMax;
        let so = selectedOrder;

        if (!checked) {
            if (currentOrder < sm) {
                so = Object.keys(so).reduce((prev, key) => {
                    const v = so[key];
                    prev[key] = v > currentOrder ? v - 1 : v;
                    return prev;
                }, {});
            }
            so[e.target.value] = 0;
        } else {
            so[e.target.value] = sm + 1;
        }
        sm += checked ? 1 : -1;
        setSelectedMax(sm);
        setSelectedOrder(so);
    };
    const _onSubmit = () => {
        const sorted = Object.keys(selectedOrder)
        .map(x => ({ id: x, order: selectedOrder[x]}))
        .filter(x=> x.order > 0)
        .sort((p1, p2) => p1.order - p2.order);
    const imgs = images;
    const result = [];
    for (let i = 0; i < sorted.length; i += 1) {
        result.push(imgs[sorted[i].id])
    }
        if (props.onSubmit) {
            props.onSubmit(result)
        }
    };

    let v = imgCountClassName[images.length];
    let selectImagesClass =  v ? v : 'one-quarter';
    const imagesMapped = images.map((item, index) => ({ id: index, src: item }));
    return (<>
        <div className="select-images">
            <h2 className="page-title">{title}</h2>
            <div className="layout-container">
                <div className="container">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className={'layout-content ' + selectImagesClass}
                        columnClassName="my-masonry-grid_column"
                    >
                        {imagesMapped.map((item, index) => (
                            <Image
                                key={index}
                                image={item}
                                selectedIndex={selectedOrder[item.id]}
                                onChange={_onChange}
                            />
                        ))}
                    </Masonry>
                    
                    <div className="w-100 text-center pb-6">
                        <Button text='Neste' onClick={_onSubmit} disabled={selectedMax === 0} />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default SelectImages;
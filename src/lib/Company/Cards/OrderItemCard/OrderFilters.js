import React from 'react';
import { DropDown, DropDownItem } from "../../..";
import cx from 'classnames';

const SortIcon = () => (
    <svg width={13} height={9}>
        <path
            d="M0 1.96L1.023 1 6.5 6.09 11.977 1 13 1.96 6.5 8z"
            fill="#5C6265"
            stroke="#5C6265"
            strokeWidth={0.788}
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const OrderFilters = (props) => {
    return (
        <>
            <thead className="orderFilters">
            <tr>
                <th className="orderFilters--dropdown">
                    <svg className="mr-2" width={27} height={24}>
                        <path
                            d="M20.8 22.6A1.8 1.8 0 1020.8 19 1.8 1.8 0 0020.8 22.6h0zm-14.4 0A1.8 1.8 0 106.4 19 1.8 1.8 0 006.4 22.6h0zm-4.2-7.2h14.4V5.2a3 3 0 00-3-3H5.2a3 3 0 00-3 3v10.2zm15.6-4.8h6.934a2.982 2.982 0 00-.366-.607l-2.36-3.035A2.997 2.997 0 0019.64 5.8H17.8v4.8zm0 4.8H25v-3.565-.035h-7.2v3.6zm5.94 6a3.002 3.002 0 01-5.88 0H9.34a3.002 3.002 0 01-5.88 0H2.8A1.8 1.8 0 011 19.6V5.2A4.2 4.2 0 015.2 1h8.4a4.2 4.2 0 014.157 3.6h1.883c1.296 0 2.519.598 3.314 1.622l2.362 3.034c.572.737.884 1.646.884 2.58V19.6a1.8 1.8 0 01-1.8 1.8h-.66zm0-1.2h.66c.331 0 .6-.27.6-.6v-3H2.2v3c0 .33.269.6.6.6h.66a3 3 0 015.88 0h8.52a3 3 0 015.88 0h0z"
                            stroke="#5C6265"
                            strokeWidth={0.2}
                            fill="#5C6265"
                            fillRule="evenodd"
                        />
                    </svg>
                    <DropDown title={'Leveringsstatus'} {...props}>
                        <DropDownItem>
                            <a href="/" onClick={(e) => {e.preventDefault(); props.onClick(1); }}>Merk alle som levert</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="/" onClick={(e) => {e.preventDefault(); props.onClick(2); }}>Merk alle som ikke levert</a>
                        </DropDownItem>
                    </DropDown>
                </th>

                <th>
                    <a
                        className={cx('orderFilters--sort', { active: props.order_by === 'full_name' })}
                        href=""
                        onClick={(e) => {e.preventDefault(); props.orderByOnClick('full_name'); }}
                    >
                        <span className="mr-2">Navn</span>
                        <SortIcon />
                    </a>
                </th>
                <th>Adresse</th>
                <th>
                    <a className={cx('orderFilters--sort', { active: props.order_by === 'zip_code' })}
                    href=""
                    onClick={(e) => {e.preventDefault(); props.orderByOnClick('zip_code'); }}
                    >
                        <span className="mr-2">Post sted</span>
                        <SortIcon />
                    </a>
                </th>
                <th><br/></th>
            </tr>
            </thead>
        </>
    );
};

export default OrderFilters;

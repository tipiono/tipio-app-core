import React from 'react';
import { storiesOf } from '@storybook/react';
import { CompanySidebarBaseCard, CompanyAddBidCard, AddSaleSidebarCard } from '../../../lib/index';

const tipio = {
    data: {
        id: 274,
        title: 'ANNA BÜLOW Kunsttrykk',
        subtitle: 'ANNA BÜLOW LYSBÆRER 50x70 cm Limited edition',
        description:
            ' MÅL:\n * Høyde: 70 CM \n * Bredde: 50 CM \n\nPRODUKTEGENSKAPER :\n * Eksklusiv serie for Bohus i Norge \n * Designpapir 200g \n * Kunsttrykk\n\nPRODUKTBESKRIVELSE:\n * ANNA BÜLOW LYSBÆRER 50x70 cm Limited edition',
        product_url: 'https://www.bohus.no/interioer/galleri/bilder/anna-bulow-kunsttrykk-7',
        market_price: '699',
        wanted_price: '1100',
        expires_in: '2019-09-18T09:41:03.789Z',
        bid_expires_in: '2019-09-10T15:41:03.789Z',
        voting_expires_in: '2019-09-11T06:41:03.789Z',
        binding_expires_in: null,
        more_sales_expires_in: null,
        user_id: 1,
        category_id: 2,
        has_offer: false,
        type: 1,
        product_code: null,
        created_at: '2019-09-10T15:41:03.789Z',
        updated_at: '2019-09-10T15:41:03.789Z',
        deleted_at: null,
        images: [
            {
                id: 563,
                name: 'dev/1/tipios/274/1568130063797',
                original_name: 'dev/1/tipios/274/1568130063797',
                filename: 'dev/1/tipios/274/1568130063797',
                file_size: 0,
                type: 2,
                mime_type: '',
                ext: '',
                user_id: 1,
                blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/tipios/274/1568130063797',
                created_at: '2019-09-10T15:41:06.587Z',
                updated_at: '2019-09-10T15:41:06.587Z',
                deleted_at: null,
                tipio_file_store: {
                    tipio_id: 274,
                    file_store_id: 563,
                    index: 0,
                    created_at: '2019-09-10T15:41:06.595Z',
                    updated_at: '2019-09-10T15:41:06.595Z',
                    deleted_at: null
                }
            },
            {
                id: 564,
                name: 'dev/1/tipios/274/1568130064045',
                original_name: 'dev/1/tipios/274/1568130064045',
                filename: 'dev/1/tipios/274/1568130064045',
                file_size: 0,
                type: 2,
                mime_type: '',
                ext: '',
                user_id: 1,
                blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/tipios/274/1568130064045',
                created_at: '2019-09-10T15:41:06.587Z',
                updated_at: '2019-09-10T15:41:06.587Z',
                deleted_at: null,
                tipio_file_store: {
                    tipio_id: 274,
                    file_store_id: 564,
                    index: 1,
                    created_at: '2019-09-10T15:41:06.595Z',
                    updated_at: '2019-09-10T15:41:06.595Z',
                    deleted_at: null
                }
            },
            {
                id: 565,
                name: 'dev/1/tipios/274/1568130064734',
                original_name: 'dev/1/tipios/274/1568130064734',
                filename: 'dev/1/tipios/274/1568130064734',
                file_size: 0,
                type: 2,
                mime_type: '',
                ext: '',
                user_id: 1,
                blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/tipios/274/1568130064734',
                created_at: '2019-09-10T15:41:06.587Z',
                updated_at: '2019-09-10T15:41:06.587Z',
                deleted_at: null,
                tipio_file_store: {
                    tipio_id: 274,
                    file_store_id: 565,
                    index: 2,
                    created_at: '2019-09-10T15:41:06.595Z',
                    updated_at: '2019-09-10T15:41:06.595Z',
                    deleted_at: null
                }
            },
            {
                id: 566,
                name: 'dev/1/tipios/274/1568130065578',
                original_name: 'dev/1/tipios/274/1568130065578',
                filename: 'dev/1/tipios/274/1568130065578',
                file_size: 0,
                type: 2,
                mime_type: '',
                ext: '',
                user_id: 1,
                blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/tipios/274/1568130065578',
                created_at: '2019-09-10T15:41:06.587Z',
                updated_at: '2019-09-10T15:41:06.587Z',
                deleted_at: null,
                tipio_file_store: {
                    tipio_id: 274,
                    file_store_id: 566,
                    index: 3,
                    created_at: '2019-09-10T15:41:06.595Z',
                    updated_at: '2019-09-10T15:41:06.595Z',
                    deleted_at: null
                }
            },
            {
                id: 567,
                name: 'dev/1/tipios/274/1568130066116',
                original_name: 'dev/1/tipios/274/1568130066116',
                filename: 'dev/1/tipios/274/1568130066116',
                file_size: 0,
                type: 2,
                mime_type: '',
                ext: '',
                user_id: 1,
                blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/tipios/274/1568130066116',
                created_at: '2019-09-10T15:41:06.587Z',
                updated_at: '2019-09-10T15:41:06.587Z',
                deleted_at: null,
                tipio_file_store: {
                    tipio_id: 274,
                    file_store_id: 567,
                    index: 4,
                    created_at: '2019-09-10T15:41:06.595Z',
                    updated_at: '2019-09-10T15:41:06.595Z',
                    deleted_at: null
                }
            }
        ],
        user: {
            name: 'Ismajl',
            last_name: 'Ramadani',
            file_store: { blob_url: 'https://tipio.ams3.cdn.digitaloceanspaces.com/dev/1/avatar/1566295983012' }
        },
        tipio_offer: {
            id: 31,
            inventory_available: 0,
            inventory_initial_available: 0,
            price: '25',
            compare_at_price: '0',
            tipio_id: 274,
            company_id: null,
            has_options: null,
            options_description: null,
            created_at: '2019-09-10T15:41:06.604Z',
            updated_at: '2019-09-10T15:41:06.604Z',
            deleted_at: null,
            tipio_offer_options: [],
            company: null
        },
        category: {
            id: 2,
            title: 'Hus & hage',
            parent_id: 0,
            order: 2,
            icon: 532,
            has_options: null,
            created_at: '2019-04-29T10:20:54.145Z',
            updated_at: '2019-04-29T10:20:54.145Z',
            deleted_at: null
        },
        published_expires_in: '2019-09-13T15:41:03.789Z',
        meta: { joined_count: 2, bindings_count: 0 }
    },
    status: 200
};

const meta = { potential_earning: 12355, joined_count: '12' };

storiesOf('Company/Components/Company Sidebar Cards', module)
    .add('Base Card', () => (
        <>
            <div className="col-4 m-3">
                <CompanySidebarBaseCard state="" tipio={tipio.data} meta={meta} />
            </div>
        </>
    ))

    .add('Add Bid Card', () => (
        <>
            <div className="col-4 m-3">
                <CompanyAddBidCard tipio={tipio.data} meta={meta} />
            </div>
        </>
    ))
    .add('Add Bid Card With Loading', () => (
        <>
            <div className="col-4 m-3">
                <CompanyAddBidCard state="" tipio={tipio.data} meta={meta} loading={true} />
            </div>
        </>
    ))

    .add('Add Sale Card', () => (
        <>
            <div className="col-4 m-3">
                <AddSaleSidebarCard />
            </div>
        </>
    ));

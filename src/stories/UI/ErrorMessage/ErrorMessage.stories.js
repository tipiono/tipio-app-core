import React from 'react';
import {storiesOf} from '@storybook/react';
import {ErrorMessage} from '../../../lib'

storiesOf('UI/Error Messages/Left', module)
    .add('Red', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-red"}
                    paddingX={"px-3"}
                    paddingY={"py-3"}
                    textAlign={"text-left"}
                />
            </div>
        </>
    )

    .add('Yellow', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-yellow"}
                    paddingX={"px-4"}
                    paddingY={"py-4"}
                    textAlign={"text-left"}
                />
            </div>
        </>
    )
    .add('Purple', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-purple"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-left"}
                />
            </div>
        </>
    )
    .add('Green', () =>
        <>
            <div className="col-4 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-green"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-left"}
                />
            </div>
        </>
    )


storiesOf('UI/Error Messages/Center', module)
    .add('Red', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-red"}
                    paddingX={"px-3"}
                    paddingY={"py-3"}
                    textAlign={"text-center"}
                />
            </div>
        </>
    )

    .add('Yellow', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-yellow"}
                    paddingX={"px-4"}
                    paddingY={"py-4"}
                    textAlign={"text-center"}
                />
            </div>
        </>
    )
    .add('Purple', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-purple"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-center"}
                />
            </div>
        </>
    )
    .add('Green', () =>
        <>
            <div className="col-4 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-green"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-center"}
                />
            </div>
        </>
    )

storiesOf('UI/Error Messages/Right', module)
    .add('Red', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-red"}
                    paddingX={"px-3"}
                    paddingY={"py-3"}
                    textAlign={"text-right"}
                />
            </div>
        </>
    )

    .add('Yellow', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-yellow"}
                    paddingX={"px-4"}
                    paddingY={"py-4"}
                    textAlign={"text-right"}
                />
            </div>
        </>
    )
    .add('Purple', () =>
        <>
            <div className="col-3 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-purple"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-right"}
                />
            </div>
        </>
    )
    .add('Green', () =>
        <>
            <div className="col-4 m-3">
                <ErrorMessage
                    content={"Tipio klarte ikke  å laste inn informasjonen fra nettsiden du linket til. Fyll inn informasjonen under"}
                    color={"bg-green"}
                    paddingX={"px-5"}
                    paddingY={"py-5"}
                    textAlign={"text-right"}
                />
            </div>
        </>
    )


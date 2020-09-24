import React from 'react';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <footer className="customFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-11 mx-auto">
                        <div className="row">
                            <FooterContent
                                title={'Kontakt oss'}
                                data={[
                                    {
                                        label: 'Bryggegata 3, 0250 Oslo',
                                        anchorProps: { href: 'https://goo.gl/maps/YYYf61pKq3uoiz929', target: '_blank' }
                                    },
                                    {
                                        label: 'Org. nr. 920 691 951',
                                        anchorProps: {
                                            href: 'https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=920691951'
                                        }
                                    },
                                    {
                                        label: 'post@tipio.no',
                                        anchorProps: { href: 'mailto:post@tipio.no' }
                                    }
                                ]}
                            />
                            <FooterContent
                                title={'Følg Tipio'}
                                data={[
                                    {
                                        label: 'Facebook',
                                        anchorProps: { href: 'https://www.facebook.com/Tipio-667205140149721' }
                                    },
                                    {
                                        label: 'Instagram',
                                        anchorProps: { href: 'https://www.instagram.com/tipio.no' }
                                    },
                                    {
                                        label: 'Linkedin',
                                        anchorProps: {
                                            href: 'https://www.linkedin.com/company/tipio/?viewAsMember=true'
                                        }
                                    }
                                ]}
                            />
                            <div className="col-sm-12 col-md-6">
                                <p className="customFooter__description">
                                    Hvorfor kjøpe dyrt alene når vi kan handle billig sammen?
                                    <br />
                                    <span></span>I Tipio kan du fortelle butikkene hva du ønsker å få en bedre pris på.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

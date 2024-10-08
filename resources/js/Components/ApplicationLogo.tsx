type Props = {
    color?: string;
    width?: number;
    className?: string;
    slogan?: boolean;
};

export default function ApplicationLogo({
    color = "#004aad",
    width = 150,
    slogan = false,
    ...rest
}: Props) {
    const height = slogan ? 321.11676 : 293;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 477.26009 ${height}`}
            width={width}
            {...rest}
        >
            <g>
                <path
                    d="M262.12,19.5c13.33-.01,26.67.01,40-.01.02,15.09-.01,30.18.01,45.26q29.685-.015,59.37,0v40q-29.685-.015-59.37,0c-.06,15.28.08,30.56-.07,45.84a27.18166,27.18166,0,0,1,16.55-15.17c9.59-3.13,20.06-3.1,29.89-1.17,7.6,1.67,15.19,5.59,19.36,12.41,3.77,6.05,4.46,13.37,4.4,20.34-.03,23.69.01,47.39-.02,71.08-.01,7.69-1.55,15.91-6.91,21.75-6.29,6.83-15.78,9.56-24.79,10.17-9.92.57-20.62-.17-29.11-5.88-4.25-2.79-7.22-7.05-9.37-11.58.12,4.86.05,9.72.06,14.59h-40q0-81.195,0-162.38H202.87q.015-20.01.01-40h59.25Q262.115,42.115,262.12,19.5Zm46.74,136.94c-4.66,1.16-7,6.05-6.72,10.56q-.045,34.5,0,69c-.19,4.18,1.58,8.9,5.84,10.35a29.73773,29.73773,0,0,0,18.12.12c4.38-1.35,6.34-6.12,6.13-10.39q.045-34.545,0-69.11c.11-4.04-1.51-8.57-5.58-10.11A30.14064,30.14064,0,0,0,308.86,156.44Z"
                    transform="translate(-18.37 -19.49)"
                    fill={color}
                />
                <path
                    d="M77.55,134.14c11.2-2.45,23.89-1.47,33.34,5.54,6.55,4.56,9.57,12.65,9.79,20.39.18,9.43.01,18.87.07,28.3q-19.995.015-40,0c-.04-8.12.08-16.25-.04-24.38.09-3.15-1.41-6.57-4.58-7.64a17.1421,17.1421,0,0,0-13.54.74c-3.78,2.2-4.21,7.02-4.21,10.94q-.015,49.545,0,99.1H18.37V135.87H58.38c-.01,4.83.03,9.66-.04,14.48A27.8253,27.8253,0,0,1,77.55,134.14Z"
                    transform="translate(-18.37 -19.49)"
                    fill={color}
                />
                <path
                    d="M157.29,135.87c12.52-3.01,25.49-3.08,38.29-2.78,9.31.42,18.73,1.34,27.58,4.4,5.69,1.96,11.13,5.28,14.6,10.31,3.73,5.26,4.92,11.87,4.87,18.22q-.015,20.67,0,41.36c-29.74-.02-59.47.02-89.21-.03a27.38339,27.38339,0,0,0-5.27.53,8.13717,8.13717,0,0,0,4.24,1.69c6.75.7,13.49,1.48,20.24,2.23.05,8.72-.11,17.45.06,26.16a9.08562,9.08562,0,0,0,6.15,8.57,29.86157,29.86157,0,0,0,17.29.01,9.13727,9.13727,0,0,0,6.37-8.52c.32-7,.03-14.01.12-21.02h40.01c-.04,7.33.06,14.66-.04,21.99-.12,6.65-2.03,13.52-6.58,18.54-4.69,5.3-11.51,8.02-18.23,9.69-12.17,2.94-24.79,3.09-37.25,2.85-9.61-.38-19.35-1.25-28.51-4.39-5.53-1.9-10.81-5.06-14.28-9.86-3.75-5.09-5.17-11.54-5.13-17.78q.03-36.54.01-73.08c-.06-6.92,1.78-14.14,6.5-19.37C143.77,140.26,150.58,137.53,157.29,135.87Zm15.59,29.21c-.59,5.49-.11,11.03-.25,16.55q15-.015,29.99,0c-.07-4.88.16-9.76-.08-14.63-.08-3.58-2.03-7.24-5.49-8.56-5.17-2.05-11.02-1.92-16.41-.9C176.83,158.21,173.41,161.13,172.88,165.08Z"
                    transform="translate(-18.37 -19.49)"
                    fill={color}
                />
                <path
                    d="M411.21,135.76c11.86-2.95,24.19-2.88,36.34-2.71,9.82.38,19.79,1.27,29.12,4.58,5.98,2.1,11.59,5.85,14.88,11.39,3.31,5.35,4.09,11.79,4.08,17.96V267.13H455.62c.01-4.87-.03-9.73.05-14.59a27.11761,27.11761,0,0,1-14.92,14.55c-9.24,3.57-19.5,3.66-29.19,2.24-7.92-1.36-16-4.85-20.81-11.56-4.1-5.69-5.24-12.91-5.25-19.77.02-11.03-.05-22.05.04-33.08.1-7.84,2.35-16.16,8.32-21.61,7.15-6.59,17.2-8.79,26.67-8.94,9.28-.2,19.26,1.03,26.85,6.82,3.74,2.71,6.29,6.67,8.29,10.76-.26-8.66.31-17.33-.32-25.97-.3-4.32-3.03-8.55-7.38-9.66-5.57-1.41-11.91-1.58-17.18.94-4.64,2.62-3.74,8.63-3.81,13.12q-18.24-.015-36.47,0c-.05-8.18-.55-17.09,4.12-24.26C398.31,140.42,404.85,137.43,411.21,135.76Zm24.5,61.46c-4.78.25-9.82,3.42-10,8.63-.48,10.04-.1,20.11-.2,30.16-.19,4.1,1.5,8.74,5.63,10.26a29.4328,29.4328,0,0,0,17.21.51,9.30853,9.30853,0,0,0,7.11-8.74c.4-9.01.03-18.05.18-27.07,0-3.97-.01-8.81-3.62-11.37C447.25,196.47,441.16,196.79,435.71,197.22Z"
                    transform="translate(-18.37 -19.49)"
                    fill={color}
                />

                {slogan ? (
                    <>
                        {" "}
                        <path
                            d="M259.07,300.03c-.2-2.74,4.78-2.82,4.71-.12.25,5.23.09,10.47,0,15.7,4.29-6.99,15.64-6.74,19.95.08,4.04,6.52,3.67,16.11-1.82,21.7-5,4.8-14.33,4.21-18.02-1.93-.08,1.79.4,5.24-2.42,4.98-2.05.44-2.69-1.91-2.48-3.45C259.06,324.67,258.89,312.34,259.07,300.03Zm9.72,15.37c-5.72,2.95-5.78,11-3.79,16.3,2.16,5.82,11.27,6.47,14.44,1.25a15.71184,15.71184,0,0,0,.7-13.66C278.38,315,272.81,313.51,268.79,315.4Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M378.05,299.4c1.89-2.31,6.63-.57,5.79,2.61-.15,2.01-2.56,2.93-4.28,2.4C377.34,304.06,376.57,300.87,378.05,299.4Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M359.83,303.18a2.75062,2.75062,0,0,1,4.41.03,47.939,47.939,0,0,1,.26,8.04,59.26021,59.26021,0,0,1,7.77.18,2.10646,2.10646,0,0,1,.11,3.37c-2.59.58-5.26.29-7.88.33.2,5.92-.44,11.91.35,17.79.74,3.58,4.95,3.16,7.69,4,1.48.18,1.27,3.14-.16,3.31-4.77.88-11.33-.82-12.35-6.31-.93-6.18-.17-12.49-.4-18.71-1.74-.07-3.49-.04-5.2-.28-1.33-.78-1.43-3.19.29-3.52a38.10638,38.10638,0,0,1,4.9-.23A56.15334,56.15334,0,0,1,359.83,303.18Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M421.66,303.99c.04-2.52,4.63-2.56,4.7-.03a61.13291,61.13291,0,0,1,.14,7.29,58.38474,58.38474,0,0,1,7.71.17c1.07.73,1.38,2.63.16,3.38-2.58.58-5.25.29-7.87.33.3,6.13-.66,12.4.54,18.44,1.3,3.84,6.57,1.59,8.53,4.43-.11.45-.32,1.36-.43,1.81-4.91,1.92-12.47-.44-13.24-6.38-.82-6.04-.23-12.16-.4-18.22-1.69-.07-3.38-.05-5.04-.28-1.37-.74-1.51-3.29.29-3.52a35.58176,35.58176,0,0,1,4.74-.23A57.454,57.454,0,0,1,421.66,303.99Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M20.42,312.9c-.3-2.57,3.76-3.27,4.56-.89.12,1.2.11,2.43.11,3.65,2.49-4.05,7.29-5.35,11.79-5.13a10.622,10.622,0,0,1-.01,3.73c-3.74,1.18-8.89.8-10.67,5.15-2.17,6.42-.13,13.41-1.2,20.02-1.24,1.86-4.95,1.19-4.57-1.36C20.32,329.68,20.34,321.29,20.42,312.9Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M40.8,317.3c3.15-6.31,11.68-8.59,17.83-5.47,4.94,2.6,7.04,8.84,5.98,14.11-6.83,1.37-14.01.12-20.97.6.48,4.06,2.27,8.87,6.85,9.66,4.69,1.46,8.87-1.48,13.08-2.98,2.09,1.37.86,4.08-1.03,4.89-6.32,3.67-15.78,3.57-20.62-2.49C38.07,330.44,38,322.97,40.8,317.3Zm6.6-1.3c-2.31,1.69-2.89,4.64-3.65,7.22,5.67.05,11.34.03,17.01.02-.51-2.14-.68-4.51-2.14-6.27C56,313.64,50.64,313.58,47.4,316Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M79.7,311.07c4.66-1.26,10.25-.6,13.87,2.8a2.57431,2.57431,0,0,1-.29,4.04c-3.35-.81-6.07-3.83-9.75-3.28a8.38136,8.38136,0,0,0-7.72,6.39c-.95,3.78-.96,8.09,1.02,11.55,1.85,3.29,6.07,4.52,9.6,3.68,2.21-.67,4.11-2.04,6.23-2.93,2.24-.36,2.43,2.95.92,3.91-6.12,5.19-17.28,4.48-21.36-2.94C67.73,326.43,70.18,313.78,79.7,311.07Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M100.24,312.08c.46-2.19,4.51-2.01,4.63.33.65,6.79-.64,13.73.67,20.46,2.42,6.08,12.44,3.8,13.66-2.13,1.1-6.13-.1-12.42.6-18.59.46-1.91,3.02-1.94,4.32-.9.79,2.51.46,5.18.53,7.76-.13,6.35.14,12.7-.1,19.04a2.45789,2.45789,0,0,1-3.1,2.43c-2.1-.54-1.47-2.98-1.79-4.56-3.38,5.03-10.85,6.04-15.79,2.86-3.7-2.64-3.89-7.62-3.88-11.74C100.13,322.05,99.67,317.03,100.24,312.08Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M133.43,312.95c-.22-2.18,2.58-3,4.12-1.89.86,1.43.42,3.17.55,4.76a11.178,11.178,0,0,1,11.38-5.07c1.33,1.09,1.06,3.95-1,3.97-3.53.47-7.91,1.06-9.34,4.94-1.95,6.18-.26,12.82-1.02,19.17-.29,2.67-5.17,1.93-4.67-.76C133.3,329.7,133.33,321.31,133.43,312.95Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M158.83,311.48c4.83-1.82,10.9-1.28,14.87,2.2,1.58,1.06,1.38,4.56-.97,3.98-3.48-1.71-7.18-4.25-11.25-2.79-2.82.52-4.83,4.46-2.45,6.6,4.15,2.79,9.76,2.17,13.82,5.21,2.56,1.9,2.97,5.67,1.84,8.49-1.41,3.21-4.96,4.84-8.27,5.22-4.34.47-9.03-.09-12.7-2.61-1.52-.82-1.7-2.6-1.34-4.12,3.65-.78,6.42,3.05,10.13,2.83,3.42.57,9.07-.93,7.86-5.48-3.88-4.91-12.23-2.49-16.04-7.79C151.51,318.98,154.19,313.02,158.83,311.48Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M188.86,311.47c5.73-2.21,13.24-.86,16.76,4.51a18.59731,18.59731,0,0,1,.42,18.42c-4.78,8.41-19.04,8.24-23.44-.45C178.78,326.49,180.33,314.9,188.86,311.47Zm1.88,3.83c-4.71,2.16-5.52,8.17-4.93,12.75.31,3.76,2.73,7.73,6.75,8.27,4.02.94,8.64-1.25,9.82-5.35,1.18-4.17,1.27-9.06-1.03-12.87C199.19,314.6,194.34,313.76,190.74,315.3Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M217.46,313.04c4.8-3.65,12.03-3.31,16.89.07,1.77.98,2.5,4.05.15,4.77-3.51-1.52-6.97-4.32-11.04-3.18-3.05.24-5.66,4.1-3.32,6.65,4.43,3.15,10.83,2.13,14.83,6.09a7.66986,7.66986,0,0,1-2.5,11.44,18.40611,18.40611,0,0,1-17.02-.8c-1.77-.79-1.91-2.82-2.26-4.46,4.43-.74,7.77,3.79,12.32,2.91,3.37.45,7.97-2.55,5.72-6.26-4.05-3.42-10.22-2.32-14.35-5.7C213.24,321.75,213.91,315.65,217.46,313.04Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M294.24,313.73a18.97478,18.97478,0,0,1,16-2.47c4.09,1.34,5.91,5.83,5.87,9.84-.04,5.85.2,11.71-.11,17.54.03,1.7-2.09,2.21-3.36,1.59-1.81-.68-1.02-3.03-1.3-4.47-3.57,6.48-14.15,6.32-17.87.11-1.98-3.36-1.45-8.71,2.36-10.54,4.86-2.31,10.43-1.91,15.67-2.12-.3-2.84.01-6.78-3.18-8.1-4.51-1.64-9,.71-13.07,2.46C292.85,318.55,292.29,314.55,294.24,313.73Zm5.63,13.89c-2.92.96-3.13,5.08-1.21,7.09,2.82,3.07,8.19,2.31,10.7-.78,1.85-2.02,1.84-4.9,2.22-7.44C307.67,326.56,303.61,326.27,299.87,327.62Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M324.69,313c-.33-2.66,3.84-3.37,4.73-1.03.75,6.8-.45,13.72.59,20.49,1.9,6.37,12.17,4.51,13.66-1.33,1.4-6.25,0-12.75.74-19.07.5-1.73,2.62-1.78,3.95-1.05,1.06,1,.62,2.63.79,3.93-.15,7.9.17,15.82-.14,23.72-.03,2.14-2.91,2.2-4.21,1.14a16.33756,16.33756,0,0,1-.48-4c-4.18,6.82-16.99,6.54-19.07-1.85C324,327.06,324.8,319.96,324.69,313Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M378.8,311.29c1.23-1.56,4.63-.59,4.15,1.72.11,8.33.08,16.68.01,25.01.34,2.44-2.74,3.1-4.31,1.83-.9-2.18-.45-4.61-.55-6.89.18-6.99-.24-14,.18-20.98Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M396.89,311.41c4.82-1.72,10.9-1.19,14.76,2.41,1.49,1,1.22,4.13-.92,3.93-3.46-1.71-7.11-4.29-11.17-2.94-2.96.41-5.12,4.46-2.64,6.68,4.34,2.88,10.34,2.09,14.34,5.67,3.52,3.53,1.86,10.16-2.69,11.99-5.56,2.35-12.63,1.87-17.52-1.82-1.6-.95-1.32-4.7,1.05-3.84,3.31,1.4,6.56,3.5,10.33,3.03,2.63.03,6.26-1.39,5.94-4.58-.07-2.51-2.88-3.22-4.83-3.77-4.07-1.22-9.23-1.51-11.69-5.48C389.56,318.33,392.36,312.84,396.89,311.41Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M440.97,313.66a19.10644,19.10644,0,0,1,16.1-2.35c4,1.36,5.75,5.79,5.74,9.73.1,5.65.16,11.31-.01,16.97.2,1.87-1.7,2.84-3.31,2.39-1.75-.83-1.35-2.91-1.55-4.45-3.69,6.17-13.69,6.08-17.59.23-2.23-3.46-1.68-9.22,2.45-11,4.8-2.13,10.21-1.75,15.34-1.99-.28-2.75.1-6.5-2.85-7.94-4.99-2.19-9.79,1.19-14.43,2.58A2.47765,2.47765,0,0,1,440.97,313.66Zm5.22,14.11c-2.74,1.26-2.65,5.37-.57,7.2,3.01,2.86,8.31,1.88,10.67-1.35,1.67-1.98,1.59-4.71,1.89-7.14C454.18,326.59,449.97,326.22,446.19,327.77Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                        <path
                            d="M474.19,312.66c5.12-3.37,12.89-2.95,17.32,1.42,1.47,1.27.15,2.96-.66,4.16-3.58-2.32-7.89-4.93-12.28-3.23-2.85.68-4.39,4.93-1.71,6.74,4.29,2.47,9.83,1.98,13.78,5.19,3.75,3.33,2.29,10.18-2.26,12.1a18.47431,18.47431,0,0,1-16.93-1.1,2.97216,2.97216,0,0,1-1.23-4.36c1.57-.64,2.94.65,4.34,1.19a12.73475,12.73475,0,0,0,11.5.75c2.1-1.02,2.73-4.4.76-5.85-4.29-2.56-9.87-2.01-13.86-5.19C469.3,321.44,470.28,315.08,474.19,312.66Z"
                            transform="translate(-18.37 -19.49)"
                            fill={color}
                        />
                    </>
                ) : null}
            </g>
        </svg>
    );
}

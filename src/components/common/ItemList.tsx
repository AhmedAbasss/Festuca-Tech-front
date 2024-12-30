"use client"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import IconCopy from './icons/icon-copy';
import { getTranslation } from '../../../ni18n/i18n';
export const ItemList = ({ title, value, props, children, isCopyToClipboard }:
    {
        children?: React.ReactNode,
        title: string,
        isCopyToClipboard?: boolean,
        value: string | React.ReactNode, props?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    }) => {
    const { t } = getTranslation();
    return <div
        {...props}
        className='available-item'>
        <div className=" flex justify-between cursor-pointer ">
            <div className='font-semibold  px-1 min-w-fit'>
                {title}
            </div>
            <div className='font-light' >
                {
                    isCopyToClipboard ?
                        <CopyToClipboard text={value as string} onCopy={(text, result) => {
                            if (result) {
                                toast.success(t('Copied to clipboard'))
                            } else {
                                toast.error('Failed to copy to clipboard')
                            }
                        }}>
                            <button className='flex gap-2 hover:text-primary'>
                                <div>
                                    {value}
                                </div>
                                {<IconCopy />}
                            </button>
                        </CopyToClipboard>
                        : <>{value}
                        </>

                }

            </div>
        </div>
        {children}

    </div>
}

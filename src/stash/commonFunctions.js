import { Tooltip } from "antd";
import { ToWords } from 'to-words';

const numberToWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
        currency: false,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
    }
});

export const croreInRupee = 0.0000001;
export const lakhInRupee = 0.00001;
export const thousandInRupee = 0.001;

export const convertNumberToWords = (value) => numberToWords.convert((value || 0));

export function amountFormatInCrores(value) {
    let amount = ((parseFloat(value) * croreInRupee) || 0).toFixed(4);
    return parseFloat(amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function amountFormatInLakhs(value) {
    let amount = ((parseFloat(value) * lakhInRupee) || 0).toFixed(4);
    return parseFloat(amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function amountFormatInThousands(value) {
    let amount = ((parseFloat(value) * thousandInRupee) || 0).toFixed(4);
    return parseFloat(amount).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const NewCommonAmountTooltipInCrores = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value) * croreInRupee)) + ' Crores Only'} >
            {amountFormatInCrores(props?.value)}
        </Tooltip>
    );
}

export const NewCommonAmountTooltipInLakhs = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value) * lakhInRupee)) + ' Lakhs Only'} >
            {amountFormatInLakhs(props?.value)}
        </Tooltip>
    );
}

export const NewCommonAmountTooltipInThousands = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value) * thousandInRupee)) + ' Thousands Only'} >
            {amountFormatInThousands(props?.value)}
        </Tooltip>
    );
}


export const NewCommonAmountTooltipAsCrores = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value))) + ' Crores Only'} >
            {amountFormatInCrores(props?.value)}
        </Tooltip>
    );
}

export const NewCommonAmountTooltipAsLakhs = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value))) + ' Lakhs Only'} >
            {amountFormatInLakhs(props?.value)}
        </Tooltip>
    );
}

export const NewCommonAmountTooltipAsThousands = (props) => {
    return (
        <Tooltip title={convertNumberToWords((parseFloat(props?.value))) + ' Thousands Only'} >
            {amountFormatInThousands(props?.value)}
        </Tooltip>
    );
}

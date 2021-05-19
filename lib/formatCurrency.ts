import numeral from 'numeral';
import 'numeral/locales';

const formatCurrency = (amount: number) => {
  numeral.locale('en-gb');
  return numeral(amount).format('$0,0.00');
};

export default formatCurrency;

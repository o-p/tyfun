import { Placeholder } from './internal';

function placeholder(): void {}

placeholder.isPlaceholder = true;

export default placeholder as Placeholder;

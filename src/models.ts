interface ITaskItems {
    id: number;
    key?: number;
    title: string;
    date: any;
    status: boolean;
}

interface SvgProps {
    color: string;
    fill?: React.SVGAttributes<SVGSVGElement>
}
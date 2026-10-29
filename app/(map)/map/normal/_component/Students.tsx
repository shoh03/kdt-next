interface Student {
    id: number;
    name: string;
    isPresent: boolean;
}

interface StudentProps {
    student: Student
}


export default function Students({student}: StudentProps) {

    const {id, name, isPresent} = student
    return (
        <li className="text-[20px]">
            <p>id: {id}</p>
            <p className="text-blue-700">이름: {name}</p>
            <p>출석여부: {isPresent && "출석"}</p>
        </li>
    );
}

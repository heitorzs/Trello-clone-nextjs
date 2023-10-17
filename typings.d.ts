interface Board {
    columns: Map<TypedColumn,Column>
}

type TypedColumn = 'ToDo' | 'InProgress' | 'Done'
interface Column {
    id: TypedColumn,
    todos: Todo[]
} 

interface Todo {
    $id: string,
    $createdAt: string,
    title: string,
    progress: TypedColumn,
    image?: string;
}

interface Image {
    bucketId: string,
    fileId: string,
}
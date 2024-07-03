export default function validateFinishTask({ done }) {
    const { completed } = done;

    if (typeof completed !== 'boolean') {
        throw new Error('El campo "completed" debe ser booleano');
    }

    return { completed };
}
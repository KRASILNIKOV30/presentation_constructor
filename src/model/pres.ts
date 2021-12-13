import type { Editor, History, Presentation } from './types';

export function addActionToHistory(editor: Editor): History {
    console.log('inhistory')
    const newHistory: History = editor.history;
    if(newHistory.undoStack.length === 100) {
        console.log(newHistory.undoStack)
        newHistory.undoStack.shift();
    }
    while(newHistory.redoStack.length !== 0) {
        newHistory.redoStack.pop();
    }
    newHistory.undoStack.push(editor.presentation);
    return (newHistory)
}

type ChangeTitleArgs = {
    title: string;
}

function changeTitle(editor: Editor, { title }: ChangeTitleArgs): Editor {
    console.log('changed');
    const newHistory: History = addActionToHistory(editor);
    return {
        ...editor,
        history: newHistory,
        presentation: {
            ...editor.presentation,
            title: title,
        } 
    }
}

function saveDoc(editor: Editor): Editor {
    return(editor)
}

function uploadDoc(editor: Editor): Editor {
    return(editor)
}

function exportDoc(editor: Editor): Editor {
    return(editor)
}

function switchPreview(editor: Editor): Editor {
    return {
        ...editor,
        statePreview: !editor.statePreview
    }
}

function undo(editor: Editor): Editor {
    console.log(editor.history.undoStack.length);
    if (editor.history.undoStack.length !== 0) {
        const newHistory: History = editor.history;
        const newPresentation: Presentation = newHistory.undoStack.pop()!;
        newHistory.redoStack.push(editor.presentation);
        return {
            ...editor,
            history: newHistory,
            presentation: newPresentation
        }
    }
    return(editor)
}

function redo(editor: Editor): Editor {
    if (editor.history.redoStack.length !== 0) {
        const newHistory: History = editor.history;
        const newPresentation: Presentation = newHistory.redoStack.pop()!;
        newHistory.undoStack.push(editor.presentation);
        return {
            ...editor, 
            history: newHistory,
            presentation: newPresentation
        }
    }
    return(editor)
}

export { changeTitle, saveDoc, uploadDoc, exportDoc, switchPreview, undo, redo };
import React, { JSX } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '../ui';

interface DialogModalProps {
    content: JSX.Element;
    description?: string;
    onSave: () => void;
    showCloseCta?: boolean;
    title: string;
    triggerCta: JSX.Element;
}

function DialogModal({
    content,
    description,
    onSave = () => {},
    showCloseCta = false,
    title,
    triggerCta,
}: DialogModalProps) {
    const closeCta = (
        <DialogClose asChild>
            <Button type="button" variant="secondary">
                Close
            </Button>
        </DialogClose>
    );

    return (
        <Dialog>
            <DialogTrigger asChild>{triggerCta}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                {content}
                <DialogFooter className="sm:justify-end">
                    <Button type="button" onClick={onSave}>
                        Save changes
                    </Button>
                    {showCloseCta && closeCta}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DialogModal;

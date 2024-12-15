import React from 'react';
import { Button, Toaster } from '../ui';
import { useToast } from '../../hooks/use-toast';

type ToasterCtaProps = {
    ctaVariant?: 'destructive' | 'default' | 'secondary' | 'outline' | 'ghost';
    label: string;
    title?: string;
    description?: string;
    variant?: 'destructive' | 'default';
    size?: 'default' | 'sm' | 'lg' | 'icon';
};

function ToasterCta({
    ctaVariant,
    label,
    description,
    title,
    variant = 'default',
    size = 'default',
}: ToasterCtaProps) {
    const { toast } = useToast();

    const handleClick = () => {
        toast({
            title,
            description,
            variant,
        });
    };

    return (
        <>
            <Button size={size} variant={ctaVariant} onClick={handleClick}>
                {label}
            </Button>
            <Toaster />
        </>
    );
}

export default ToasterCta;

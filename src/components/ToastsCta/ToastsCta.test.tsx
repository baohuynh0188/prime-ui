import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useToast } from '../../hooks/use-toast';
import ToasterCta from './ToasterCta';

// Mock the useToast hook
jest.mock('../../hooks/use-toast', () => ({
    useToast: jest.fn(),
}));

describe('ToasterCta', () => {
    // Setup mock implementation
    const mockToast = jest.fn();
    beforeEach(() => {
        (useToast as jest.Mock).mockReturnValue({
            toast: mockToast,
            toasts: [],
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders button with correct label', () => {
        render(
            <ToasterCta
                label="Test Button"
                title="Test Title"
                description="Test Description"
            />
        );
        expect(screen.getByRole('button')).toHaveTextContent('Test Button');
    });

    test('calls toast with correct props when clicked', () => {
        render(
            <ToasterCta
                label="Click Me"
                title="Toast Title"
                description="Toast Description"
                variant="destructive"
            />
        );

        fireEvent.click(screen.getByRole('button'));

        expect(mockToast).toHaveBeenCalledWith({
            title: 'Toast Title',
            description: 'Toast Description',
            variant: 'destructive',
        });
    });

    test('renders with default props', () => {
        render(<ToasterCta label="Default Button" title="Default Title" />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-primary');
    });

    test('applies custom size prop correctly', () => {
        render(<ToasterCta label="Small Button" title="Title" size="sm" />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('px-3 text-xs'); // Adjust class name based on your actual implementation
    });

    test('applies custom variant prop correctly', () => {
        render(
            <ToasterCta
                label="Warning Button"
                title="Warning"
                variant="destructive"
            />
        );

        fireEvent.click(screen.getByRole('button'));

        expect(mockToast).toHaveBeenCalledWith({
            title: 'Warning',
            description: undefined,
            variant: 'destructive',
        });
    });
});

/**
 * Text Transform — Find, replace, and transform text on pages
 */
export class TextTransform {
    /** Find and replace text in page */
    static findAndReplace(find: string, replace: string, caseSensitive: boolean = false): number {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let count = 0;
        const nodes: Text[] = [];
        while (walker.nextNode()) nodes.push(walker.currentNode as Text);
        nodes.forEach((node) => {
            const flags = caseSensitive ? 'g' : 'gi';
            const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            if (regex.test(node.textContent || '')) {
                node.textContent = (node.textContent || '').replace(regex, replace);
                count++;
            }
        });
        return count;
    }

    /** Regex replace */
    static regexReplace(pattern: string, replacement: string, flags: string = 'gi'): number {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let count = 0;
        const regex = new RegExp(pattern, flags);
        const nodes: Text[] = [];
        while (walker.nextNode()) nodes.push(walker.currentNode as Text);
        nodes.forEach((node) => {
            if (regex.test(node.textContent || '')) {
                regex.lastIndex = 0;
                node.textContent = (node.textContent || '').replace(regex, replacement);
                count++;
            }
        });
        return count;
    }

    /** Convert case of selected/all text */
    static convertCase(mode: 'upper' | 'lower' | 'title' | 'sentence'): void {
        const selection = window.getSelection();
        if (selection && !selection.isCollapsed) {
            const text = selection.toString();
            const converted = this.applyCase(text, mode);
            document.execCommand('insertText', false, converted);
            return;
        }
    }

    /** Get page text statistics */
    static getStats(): { characters: number; words: number; sentences: number; paragraphs: number; readingTime: string } {
        const text = document.body.innerText;
        const words = text.split(/\s+/).filter((w) => w.length > 0).length;
        const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
        const paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0).length;
        const minutes = Math.ceil(words / 200);
        return { characters: text.length, words, sentences, paragraphs, readingTime: `${minutes} min` };
    }

    /** Count occurrences of text */
    static count(search: string, caseSensitive: boolean = false): number {
        const text = document.body.innerText;
        const flags = caseSensitive ? 'g' : 'gi';
        const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
        return (text.match(regex) || []).length;
    }

    private static applyCase(text: string, mode: 'upper' | 'lower' | 'title' | 'sentence'): string {
        switch (mode) {
            case 'upper': return text.toUpperCase();
            case 'lower': return text.toLowerCase();
            case 'title': return text.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
            case 'sentence': return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        }
    }
}

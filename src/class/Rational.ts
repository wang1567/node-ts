export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }

    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
        return this.denominator;
    }

    public normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }

    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public isWhole(): boolean {
        return this.denominator === 1;
    }

    public isDecimal(): boolean {
        return this.denominator !== 1;
    }

    public equals(numerator: number, denominator: number): boolean {
        const r = new Rational(numerator, denominator);
        return this.numerator === r.getNumerator() && this.denominator === r.getDenominator();
    }

    public equalsRational(r: Rational): boolean {
        return this.numerator === r.getNumerator() && this.denominator === r.getDenominator();
    }

    public static parseRational(numChars: string[], denomChars: string[]): Rational {
        const numerator = parseInt(numChars.join(''), 10);
        const denominator = parseInt(denomChars.join(''), 10);
        return new Rational(numerator, denominator);
    }

    public static parseRationalString(s: string): Rational {
        const parts = s.split('/');
        const numerator = parseInt(parts[0], 10);
        const denominator = parseInt(parts[1], 10);
        return new Rational(numerator, denominator);
    }

    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}

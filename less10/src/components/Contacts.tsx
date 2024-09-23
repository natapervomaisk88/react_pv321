import contacts from '../data/contacts.json';

export default function Contacts() {
    return <div>
        {Object.keys(contacts).map((key) => (
            <p key={key}>
                <strong>{key}: </strong>
                {(contacts as Record<string, string>)[key]}
            </p>
        ))}
    </div>;
}
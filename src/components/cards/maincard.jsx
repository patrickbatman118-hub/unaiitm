function MainCard({ title, description, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                minWidth: "250px",
                height: "150px",
                background: "#1a1a1a",
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                transition: "0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h2 style={{ margin: 0, color: "white" }}>{title}</h2>
            <p style={{ marginTop: "8px", color: "#aaa" }}>{description}</p>
        </div>
    );
}

export default MainCard;
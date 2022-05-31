import { FunctionComponent } from "react";
import { Link, Typography, Grid, Paper } from "@mui/material";
import { DocumentMeta } from "../interfaces/document";
import EvidenceTable from "./evidence-table";

interface IProps {
	doc: DocumentMeta;
}

const DCard: FunctionComponent<IProps> = ({ doc }) => {
	const { title, description, tables, categoryLabel } = doc;
	const slug = doc.slug;
	return (
		<Paper elevation={1} sx={{ my: "2rem" }}>
			<Grid container columns={20}>
				<Grid item lg={2} md={12} sx={{ px: "1rem", py: "2rem" }}>
					<Typography component="div" variant="body1">
						{categoryLabel}
					</Typography>
				</Grid>
				<Grid
					item
					lg={8}
					md={12}
					sx={{ px: "1rem", py: { xs: "0", md: "2rem" } }}
				>
					<Link href={`/EBPMDB/doc/${slug}`}>
						<Typography component="h2" variant="h5">
							{title}
						</Typography>
					</Link>
					<Typography component="p" variant="body1" sx={{ mt: 2 }}>
						{description}
					</Typography>
				</Grid>
				<Grid
					item
					xs={10}
					sx={{
						px: "1rem",
						py: "2rem",
						maxWidth: { xs: "100%", md: "50%" },
						flexBasis: { xs: "100%", md: "50%" },
					}}
				>
					{tables.map((table, i) => (
						<EvidenceTable key={i} table={table} />
					))}
				</Grid>
			</Grid>
		</Paper>
	);
};

export default DCard;

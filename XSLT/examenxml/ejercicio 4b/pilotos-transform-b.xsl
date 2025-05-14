<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
       <pilotosF1>
            <xsl:for-each select="pilotosF1/piloto[@nacionalidad = 'ESP']">
                <nombre><xsl:value-of select="nombre" /></nombre>
                <titulos><xsl:value-of select="titulos" /></titulos>
            </xsl:for-each>
        </pilotosF1>
    </xsl:template>
</xsl:stylesheet>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
    
        <html>
            <head></head>
            <body>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Equipo</th>
                        <th>titulo</th>
                        <th>Nacionalidad</th>
                    </tr>
                    <xsl:for-each select="//piloto">
                        <tr>
                            <td><xsl:value-of select="nombre" /></td>
                            <td><xsl:value-of select="apellido" /></td>
                            <td><xsl:value-of select="equipo" /></td>
                            <td><xsl:value-of select="titulo" /></td>
                            <td><xsl:value-of select="@nacionalidad" /></td>
                        </tr>
                    </xsl:for-each>
                </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>